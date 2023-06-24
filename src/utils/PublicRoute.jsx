import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  let user = localStorage.getItem("user");

  if (user) {
    return <Navigate to='/dashboard' replace />;
  }
  return <>{children}</>;
};

export default PublicRoute;
