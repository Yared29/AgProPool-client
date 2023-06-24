import { Link } from "react-router-dom";

const TableTitle = ({ showButton = true, title, addRoute }) => {
  return (
    <div
      className={`px-8 pb-4 mx-auto text-center flex flex-wrap ${
        showButton ? "justify-between " : "justify-center"
      }`}>
      <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
        {title}
      </span>
      {showButton && (
        <Link
          to={addRoute}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Add new {title}
        </Link>
      )}
    </div>
  );
};

export default TableTitle;
