import { Navigate, NavLink,Outlet } from 'react-router-dom';
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa"
import {FaMessage} from "react-icons/fa6";
import { useAuth } from './../../store/auth';

export const AdminLayout = () => {

  const {user,isLoading} = useAuth();

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(!user.isAdmin){
    return <Navigate to="/home" />
  }
  
  return <>
    <header>
      <div className="container">
        <nav>
          <ul>
            <li> <NavLink to="/admin/users"><FaUser/> Users</NavLink> </li>
            <li> <NavLink to="/admin/contacts"><FaMessage/> Contacts</NavLink> </li>
            <li> <NavLink to="/services"><FaRegListAlt/> Services</NavLink> </li>
            <li> <NavLink to="/home"><FaHome/> Home</NavLink> </li>
          </ul>
        </nav>
      </div>
    </header>

    {/* used in nested sites url such as admin/users */}
    <Outlet/> 
    
  </>
};