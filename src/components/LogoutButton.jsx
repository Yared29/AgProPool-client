import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/actions/authActions";
import { SiOpenaccess } from "react-icons/si";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const { loading, userInfo, userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && userInfo == null && userToken == null) {
      navigate("/");
    }
  }, [loading, userInfo, userToken]);

  const handleLogout = (data) => {
    dispatch(userLogout(data));
  };
  return (
    <li
      onClick={() => handleLogout()}
      className='flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 mt-9'>
      <span className='text-2xl'>
        <SiOpenaccess />
      </span>
      <span
        className={`${!open && "hidden"} origin-left duration-300 hover:block`}>
        Logout
      </span>
    </li>
  );
};
