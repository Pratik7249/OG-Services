const Service = require("../models/service-model");

const services = async (req,res) => {
  try {
    const response = await Service.find();
    if(!response){
      res.status(404).json({msg:"No service found"});
      return;
    }
    res.status(200).json({msg:response});

  } catch (error) {
    console.log(`services:${error}`); 
  }
};

//-----------------------
// Single service logic
//-----------------------

const getServiceById = async(req,res) => {
  try {
    const id = req.params.id;
    const data = await Service.findOne({_id:id}); 
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}


module.exports = {services,getServiceById};