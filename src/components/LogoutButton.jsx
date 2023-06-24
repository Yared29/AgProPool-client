import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/actions/authActions";
import { CgLogOut } from "react-icons/cg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LogoutButton = ({ open }) => {
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
    <div className='mt-9'>
      <span
        className={`${!open && "hidden"} origin-left duration-300 hover:block`}>
        <div className='px-3 text-white'>User: {userInfo && userInfo.name}</div>
      </span>
      <li
        onClick={() => handleLogout()}
        className='flex flex-col items-start text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 '>
        <div className='flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 '>
          <span className='text-2xl'>
            <CgLogOut />
          </span>
          <span
            className={`${
              !open && "hidden"
            } origin-left duration-300 hover:block`}>
            Logout
          </span>
        </div>
      </li>
    </div>
  );
};
