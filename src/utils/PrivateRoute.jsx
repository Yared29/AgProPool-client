import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";

const PrivateRoute = ({ children }) => {
  let userInfo = localStorage.getItem("userInfo");

  if (!userInfo) {
    return <Navigate to='/signin' replace />;
  }
  return <Layout>{children}</Layout>;
};

export default PrivateRoute;
