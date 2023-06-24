import { useEffect } from "react";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { getFarmersList } from "../redux/actions/farmerActions";
import { Loading } from "../components/Loading";
import Error from "../components/Error";
import { isEmpty } from "../utils/isEmpty";
import Empty from "../components/Empty";
import TableTitle from "../components/TableTitle";

const columns = ["#", "Name", "Phone", "Kebele", "Gender", "Registered By"];
const Farmers = () => {
  const { loading, error, farmersList } = useSelector((state) => state.farmer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFarmersList());
  }, []);

  if (loading) return <Loading />;
  if (!isEmpty(error)) return <Error message={error} />;
  if (isEmpty(farmersList)) return <Empty message='Empty famrmers list' />;
  return (
    <div>
      <TableTitle title='Farmers' addRoute='/add-farmer' />
      <Table
        columns={columns}
        data={farmersList.map((farmer, index) => (
          <tr key={farmer._id}>
            <td className='px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap'>
              {index + 1}
            </td>
            <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
              {farmer.name}
            </td>
            <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
              {farmer.phone}
            </td>
            <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
              {farmer.kebele}
            </td>
            <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
              {farmer.gender}
            </td>
            <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
              {farmer.registeredBy.name}
            </td>
          </tr>
        ))}
      />
    </div>
  );
};

export default Farmers;
