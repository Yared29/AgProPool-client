import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";

const PrivateRoute = ({ children }) => {
  let user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to='/signin' replace />;
  }
  return <Layout>{children}</Layout>;
};

export default PrivateRoute;
