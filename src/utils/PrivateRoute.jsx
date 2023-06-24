import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";

const PrivateRoute = ({ children }) => {
  // let user = localStorage.getItem("user");
  var isSignedIn = true;

  if (!isSignedIn) {
    return <Navigate to='/signin' replace />;
  }
  return <Layout>{children}</Layout>;
};

export default PrivateRoute;
