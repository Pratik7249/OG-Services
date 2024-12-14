const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    require:true,
  }, 
  email:{
    type:String,
    require:true,
  }, 
  phone:{
    type:String,
    require:true,
  }, 
  password:{
    type:String,
    require:true,
  }, 
  isAdmin:{
    type:Boolean,
    default:false,
  }, 
});

//? secure the password with the bcrypt
userSchema.pre("save", async function(next){
  // console.log("pre method",this);
  const user  = this;

  if(!user.isModified("password")){
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password,saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }

});

//json web token i.e. JWT auth
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign({
      userId: this._id.toString(),
      email: this.email,
      isAdmin:this.isAdmin,
    },
    process.env.JWT_KEY, {
      expiresIn: "30d",
    }
  )
  } catch (error) {
    console.error(error);
  }
};

//define model or collection name
const User = new mongoose.model("User",userSchema);

module.exports = User;