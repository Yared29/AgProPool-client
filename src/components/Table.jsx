import { Link } from "react-router-dom";

const initialColumn = ["ID", "Name", "Email", "Edit", "Delete"];

const Table = ({ title, addRoute, columns = initialColumn, data }) => {
  return (
    <div className='p-10'>
      <div className='px-8 pb-4 mx-auto text-center flex flex-row justify-between'>
        <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
          {title}
        </span>
        <Link
          to={addRoute}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Add new {title}
        </Link>
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='p-1.5 w-full inline-block align-middle'>
            <div className='overflow-hidden border rounded-lg'>
              <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                <div className='overflow-x-auto'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead>
                      <tr>
                        {columns.map((column, index) => (
                          <th
                            key={index}
                            scope='col'
                            className='px-6 py-3 text-xs font-bold text-left text-white uppercase '>
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-400'>{data}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

{
  /* <tr>
                        <td className='px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap'>
                          1
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                          Jone Doe
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                          jonne62@gmail.com
                        </td>
                        <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
                          <a
                            className='text-green-500 hover:text-green-700'
                            href='#'>
                            Edit
                          </a>
                        </td>
                        <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
                          <a
                            className='text-red-500 hover:text-red-700'
                            href='#'>
                            Delete
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap'>
                          2
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                          Jone Doe
                        </td>
                        <td className='px-6 py-4 text-sm text-gray-200 whitespace-nowrap'>
                          jonne62@gmail.com
                        </td>
                        <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
                          <a
                            className='text-green-300 hover:text-green-700'
                            href='#'>
                            Edit
                          </a>
                        </td>
                        <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
                          <a
                            className='text-red-500 hover:text-red-700'
                            href='#'>
                            Delete
                          </a>
                        </td>
                      </tr> */
}
