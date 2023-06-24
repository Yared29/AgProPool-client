import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import { useEffect } from "react";
import { getTransactionsList } from "../redux/actions/transactionActions";
import { Loading } from "../components/Loading";
import { isEmpty } from "../utils/isEmpty";
import Empty from "../components/Empty";
import Error from "../components/Error";

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

  useEffect(() => {
    dispatch(getTransactionsList());
  }, []);

  if (loading) return <Loading />;
  if (!isEmpty(error)) return <Error message={error} />;
  if (isEmpty(transactionsList))
    return <Empty message='Empty transaction list' />;
  return (
    <div>
      <Table
        title='Transactions'
        addRoute='/add-transaction'
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
              {isEmpty(transaction.createdAt) ? "N/A" : transaction.createdAt}
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
      ;
    </div>
  );
};

export default Transactions;
