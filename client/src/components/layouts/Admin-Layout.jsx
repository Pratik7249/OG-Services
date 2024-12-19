import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from './../../store/auth';
import { toast } from "react-toastify";
import { useEffect } from "react";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  // Handle loading state and user authentication status
  useEffect(() => {
    if (user && !user.isAdmin) {
      toast.error("You are not authorized to access this page.");
    }
  }, [user]);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  // If the user is not logged in or not an admin, redirect to a safe place (e.g., home or login)
  if (!user || !user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users"><FaUser /> Users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts"><FaMessage /> Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/services"><FaRegListAlt /> Services</NavLink>
              </li>
              <li>
                <NavLink to="/home"><FaHome /> Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Render nested routes here */}
      <Outlet />
    </>
  );
};
