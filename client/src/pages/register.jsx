import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from './../store/auth';
import { toast } from "react-toastify"; 

export const Register =() => {

  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth(); 

  // handling the input value
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value, 
    })
    
  }; 

  //handling form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);
    //connecting to backend 
    try { 
    const response = await fetch(`http://localhost:5000/api/auth/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    });

   
    const res_data = await response.json();
    console.log("response from server",res_data.extraDetails); 

    if(response.ok){
      //stores token in local storage
      storeTokenInLS(res_data.token);
      
      setUser({username:"",email:"",phone:"",password:"",});
      toast.success("Registration done successfully");
      navigate("/home");
    }else{
      toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message );
    }
    
    } catch (error) {
      console.log("error from register",error);
    }
  };
  
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img 
                  src="/images/images/register.jpg" 
                  alt="registration image"
                  width="470" height="500" />
              </div>

              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>

                <br />
                
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email id"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}