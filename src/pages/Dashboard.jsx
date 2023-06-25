import { useEffect, useState } from "react";
import { isEmpty } from "../utils/isEmpty";
import Empty from "../components/Empty";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components/Loading";
import Error from "../components/Error";
import { getTransactionCropsQuantityList } from "../redux/actions/transactionActions";

const columns = ["#", "Name", "Quantity"];

const Dashboard = () => {
  const { loading, error, transactionsCropsQuantityList } = useSelector(
    (state) => state.transaction
  );
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionCropsQuantityList(selectedDate));
  }, [selectedDate]);

  if (loading) return <Loading />;
  if (!isEmpty(error)) return <Error message={error} />;
  return (
    <div>
      <div className='lg:p-8 md:p-8 p-0 mx-auto text-center flex flex-wrap justify-between'>
        <span className='lg:text-xl md:text-xl sm:text-lg font-medium whitespace-nowrap dark:text-white'>
          Dashboard
        </span>

        <div className='flex flex-row'>
          <div className='flex flex-col items-center justify-start float-left '>
            <input
              type='date'
              className='p-2 border border-gray-300 rounded-md bg-white text-black'
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>

      {isEmpty(transactionsCropsQuantityList) ? (
        <Empty message='Empty crops count list' />
      ) : (
        <Table
          columns={columns}
          data={transactionsCropsQuantityList.map((crop, index) => (
            <tr key={index}>
              <td className='px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap'>
                {index + 1}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {crop.name}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {crop.quantity}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {crop.createdAt}
              </td>
            </tr>
          ))}
        />
      )}
    </div>
  );
};

export default Dashboard;
