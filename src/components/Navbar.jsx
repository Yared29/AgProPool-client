const Navbar = () => {
  return (
    <nav className='pt-8 bg-white border-gray-200 mx-2 px-2 py-2.5 rounded dark:bg-gray-800 w-full'>
      <div className='container flex justify-between items-center mx-auto pt-3'>
        <div className='flex items-center mx-auto'>
          <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
            Welcome To AgProPool
          </span>
        </div>
      </div>
      <div className='m-5 p-0.5 bg-gray-600'></div>
    </nav>
  );
};

export default Navbar;
