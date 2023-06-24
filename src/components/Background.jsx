const Background = ({ children }) => {
  return (
    <div className='bg-white dark:bg-gray-800 h-screen w-screen'>
      {children}
    </div>
  );
};

export default Background;
