const initialColumn = ["ID", "Name", "Email", "Edit", "Delete"];

const Table = ({ columns = initialColumn, data }) => {
  return (
    <div className='flex flex-col overflow-x-auto'>
      <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
        <table className='min-w-full border rounded-lg divide-y dark:divide-gray-100 divide-gray-400 '>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope='col'
                  className='px-6 py-3 text-xs font-bold text-left uppercase dark:text-gray-200 text-gray-800'>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y dark:divide-gray-100 divide-gray-400 dark:text-gray-200 text-gray-800'>
            {data}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
