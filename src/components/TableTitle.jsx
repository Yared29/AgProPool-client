import { Link } from "react-router-dom";

const TableTitle = ({ showButton = true, title, addRoute }) => {
  return (
    <div
      className={`px-8 pb-4 mx-auto text-center flex flex-wrap ${
        showButton ? "justify-between " : "justify-center"
      }`}>
      <span className='lg:text-xl md:text-xl text:sm font-medium whitespace-nowrap text-black dark:text-white'>
        {title}
      </span>
      {showButton && (
        <Link
          to={addRoute}
          className='bg-blue-500 hover:bg-blue-700 dark:text-white text-black  font-bold p-1 lg:p-2 md:p-2 rounded'>
          Create
        </Link>
      )}
    </div>
  );
};

export default TableTitle;
