import Table from "../components/Table";
import TableTitle from "../components/TableTitle";
import { KEBELES_LIST } from "../constants/kebelesList";
const columns = ["#", "Name"];
const Kebeles = () => {
  return (
    <div>
      <TableTitle title='Kebeles' showButton={false} />
      <Table
        columns={columns}
        data={KEBELES_LIST.map((kebele, index) => (
          <tr key={index}>
            <td className='px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap'>
              {index + 1}
            </td>
            <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
              kebele
            </td>
          </tr>
        ))}
      />
    </div>
  );
};

export default Kebeles;
