import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";


const cookies = new Cookies();

const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();
  const token = cookies.get("token");
  // if (!token) {
  //   navigate("/login");
  // }
  return token ? <Component /> : navigate("/login");
};

export default PrivateRoute;
