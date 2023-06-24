import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  let userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
    return <Navigate to='/dashboard' replace />;
  }
  return <>{children}</>;
};

export default PublicRoute;
