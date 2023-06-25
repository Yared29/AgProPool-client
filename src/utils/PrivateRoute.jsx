import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, accessRole }) => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <Navigate to='/signin' replace />;
  }
  if (!accessRole.includes(userInfo.role)) {
    return <Navigate to='/dashboard' replace />;
  }
  return <Layout>{children}</Layout>;
};

export default PrivateRoute;
