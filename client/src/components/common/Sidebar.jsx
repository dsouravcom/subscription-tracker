import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/userContext";
import Cookies from "universal-cookie";
import Logout_icon from "../../assets/log-out.png";
import { jwtDecode } from "jwt-decode";

const cookies = new Cookies();

const Sidebar = () => {
  const { setUser, user } = useContext(AuthContext);
  // stored user data in global state
  useEffect(() => {
    const token = cookies.get("token");
    try {
      if (token) {
        const data = jwtDecode(token);
        setUser({
          name: data.user.name,
          email: data.user.email,
          id: data.user._id,
        });
      }
    } catch (err) {
      console.log('unable to decode the token'+err);
    }
  }, []);

  // logout function
  const logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/ ";
    window.location.href = "/login";
  };

  return (
    <>
      <div>
        <div className="bg-gray-800 px-2 pt-2">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/nolan/64/circled.png"
            alt="circled"
          />
        </div>

        <div className="flex flex-col justify-center bg-gray-800 h-screen text-white px-4 ">
          <NavLink
            to="/dashboard"
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "rgb(55 65 81)" } : {};
            }}
            className="block mb-2 py-2 px-8 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/cards"
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "rgb(55 65 81)" } : {};
            }}
            className="block mb-2 py-2 px-8 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Cards
          </NavLink>
          <NavLink
            to="/reports"
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "rgb(55 65 81)" } : {};
            }}
            className="block mb-2 py-2 px-8 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Reports
          </NavLink>
          <NavLink
            to="/settings"
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "rgb(55 65 81)" } : {};
            }}
            className="block mb-2 py-2 px-8 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Settings
          </NavLink>
          <NavLink
            to="/help"
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "rgb(55 65 81)" } : {};
            }}
            className="block mb-2 py-2 px-8 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Help
          </NavLink>
        </div>
        <div className="flex justify-between bg-gray-800 pb-4 px-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkCxRMhDDsEHuGxaoGYwt2vprah0rIEfTfw&usqp=CAU"
            alt="logo"
            className="w-10 h-10  rounded-full"
          />
          {/* <span className="text-white">{user.name}</span> */}
          <button onClick={logout}>
            <img src={Logout_icon} alt="logout" className="w-8 h-8 mt-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
