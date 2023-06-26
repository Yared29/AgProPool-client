import { useEffect } from "react";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { getAdminsList } from "../redux/actions/adminActions";
import { Loading } from "../components/Loading";
import Error from "../components/Error";
import { isEmpty } from "../utils/isEmpty";
import Empty from "../components/Empty";
import TableTitle from "../components/TableTitle";

const columns = ["#", "Name", "Phone", "Registered By"];
const Admins = () => {
  const { loading, error, adminsList } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminsList());
  }, []);

  if (loading) return <Loading />;
  if (!isEmpty(error)) return <Error message={error} />;

  return (
    <div>
      <TableTitle title='Admins' addRoute='/add-admin' />
      {isEmpty(adminsList) ? (
        <Empty message='Empty admins list' />
      ) : (
        <Table
          columns={columns}
          data={adminsList.map((admin, index) => (
            <tr key={admin._id}>
              <td className='px-6 py-4 text-sm font-medium whitespace-nowrap'>
                {index + 1}
              </td>
              <td className='px-6 py-4 text-sm dark:text-gray-200 text-gray-800 whitespace-nowrap'>
                {admin.name}
              </td>
              <td className='px-6 py-4 text-sm dark:text-gray-200 text-gray-800 whitespace-nowrap'>
                {admin.phone}
              </td>

              <td className='px-6 py-4 text-sm dark:text-gray-200 text-gray-800 whitespace-nowrap'>
                {admin.registeredBy && admin.registeredBy.name}
              </td>
            </tr>
          ))}
        />
      )}
    </div>
  );
};

export default Admins;
