import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import { useEffect, useState } from "react";
import { getTransactionsList } from "../redux/actions/transactionActions";
import { Loading } from "../components/Loading";
import { isEmpty } from "../utils/isEmpty";
import Empty from "../components/Empty";
import Error from "../components/Error";
import TableTitle from "../components/TableTitle";

const columns = [
  "#",
  "Name",
  "Crop",
  "Quantity",
  "Transaction Date",
  "Created By",
];

const Transactions = () => {
  const { loading, error, transactionsList } = useSelector(
    (state) => state.transaction
  );

  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  useEffect(() => {
    dispatch(getTransactionsList(selectedDate));
  }, [selectedDate]);

  if (loading) return <Loading />;
  if (!isEmpty(error)) return <Error message={error} />;

  return (
    <div>
      <TableTitle title='Transactions' addRoute='/add-transaction' />
      <div className='flex flex-col '>
        <div className='flex flex-row px-8 pb-5'>
          <div className='flex flex-col items-center justify-start float-left '>
            <input
              type='date'
              className='p-2 border border-gray-300 rounded-md'
              value={selectedDate}
              onChange={handleDateChange}
            />
            {selectedDate && (
              <p className='mt-2'>Selected date: {selectedDate}</p>
            )}
          </div>
        </div>
        {isEmpty(transactionsList) ? (
          <Empty message='Empty transaction list' />
        ) : (
          <Table
            columns={columns}
            data={transactionsList.map((transaction, index) => (
              <tr key={transaction._id}>
                <td className='px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap'>
                  {index + 1}
                </td>
                <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                  {isEmpty(transaction.farmer_name)
                    ? "N/A"
                    : transaction.farmer_name}
                </td>
                <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                  {isEmpty(transaction.crop) ? "N/A" : transaction.crop}
                </td>
                <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                  {isEmpty(transaction.quantity) ? "N/A" : transaction.quantity}
                </td>
                <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                  {isEmpty(transaction.createdAt)
                    ? "N/A"
                    : transaction.createdAt}
                </td>
                <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                  {isEmpty(transaction.createdBy) ||
                  isEmpty(transaction.createdBy.name)
                    ? "N/A"
                    : transaction.createdBy.name}
                </td>
              </tr>
            ))}
          />
        )}
      </div>
    </div>
  );
};

export default Transactions;
