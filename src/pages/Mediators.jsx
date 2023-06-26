import { useEffect } from "react";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { getMediatorsList } from "../redux/actions/mediatorActions";
import { Loading } from "../components/Loading";
import Error from "../components/Error";
import { isEmpty } from "../utils/isEmpty";
import Empty from "../components/Empty";
import TableTitle from "../components/TableTitle";

const columns = ["#", "Name", "Phone", "Kebele", "Gender", "Registered By"];
const Mediators = () => {
  const { loading, error, mediatorsList } = useSelector(
    (state) => state.mediator
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMediatorsList());
  }, []);

  if (loading) return <Loading />;
  if (!isEmpty(error)) return <Error message={error} />;

  return (
    <div>
      <TableTitle title='Mediators' addRoute='/add-mediator' />
      {isEmpty(mediatorsList) ? (
        <Empty message='Empty mediators list' />
      ) : (
        <Table
          columns={columns}
          data={mediatorsList.map((mediator, index) => (
            <tr key={mediator._id}>
              <td className='px-6 py-4 text-sm font-medium dark:text-gray-200 text-gray-800 whitespace-nowrap'>
                {index + 1}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {mediator.name}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {mediator.phone}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {mediator.kebele && mediator.kebele.name}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {mediator.gender}
              </td>
              <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                {mediator.registeredBy && mediator.registeredBy.name}
              </td>
            </tr>
          ))}
        />
      )}
    </div>
  );
};

export default Mediators;
