import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";

const PublicRoute = ({ children }) => {
  // let user = localStorage.getItem("user");
  var isSignedIn = true;

  if (isSignedIn) {
    return <Navigate to='/dashboard' replace />;
  }
  return <Layout>{children}</Layout>;
};

export default PublicRoute;
