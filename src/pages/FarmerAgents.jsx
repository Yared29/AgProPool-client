import { useEffect } from "react";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { getFarmerAgentsList } from "../redux/actions/farmerAgentActions";
import { Loading } from "../components/Loading";
import Error from "../components/Error";
import { isEmpty } from "../utils/isEmpty";
import Empty from "../components/Empty";
import TableTitle from "../components/TableTitle";

const columns = ["#", "Name", "Phone", "Registered By"];
const FarmerAgents = () => {
  const { loading, error, farmerAgentsList } = useSelector(
    (state) => state.farmerAgent
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFarmerAgentsList());
  }, []);

  if (loading) return <Loading />;
  if (!isEmpty(error)) return <Error message={error} />;

  return (
    <div>
      <TableTitle title='FarmerAgents' addRoute='/add-farmer-agent' />
      {isEmpty(farmerAgentsList) ? (
        <Empty message='Empty farmerAgents list' />
      ) : (
        <Table
          columns={columns}
          data={farmerAgentsList.map((farmerAgent, index) => (
            <tr key={farmerAgent._id}>
              <td className='px-6 py-4 text-sm font-medium whitespace-nowrap'>
                {index + 1}
              </td>
              <td className='px-6 py-4 text-sm whitespace-nowrap'>
                {farmerAgent.name}
              </td>
              <td className='px-6 py-4 text-sm whitespace-nowrap'>
                {farmerAgent.phone}
              </td>
              <td className='px-6 py-4 text-sm whitespace-nowrap'>
                {farmerAgent.registeredBy && farmerAgent.registeredBy.name}
              </td>
            </tr>
          ))}
        />
      )}
    </div>
  );
};

export default FarmerAgents;
