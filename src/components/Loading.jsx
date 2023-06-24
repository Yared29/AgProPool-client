export const Loading = () => {
  return (
    <div className='text-white text-center flex flex-col'>
      <div className='p-5'>Loading</div>
      <div className='flex justify-center items-center p-5'>
        <div className='loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4'></div>
      </div>
    </div>
  );
};
