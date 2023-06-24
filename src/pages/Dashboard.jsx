import { useState } from "react";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  return (
    <div>
      <div className='px-8 pb-4 mx-auto text-center flex flex-wrap justify-between'>
        <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
          Dashboard
        </span>

        <div className='flex flex-row px-8 pb-5'>
          <div className='flex flex-col items-center justify-start float-left '>
            <input
              type='date'
              className='p-2 border border-gray-300 rounded-md'
              value={selectedDate}
              onChange={handleDateChange}
            />
            {selectedDate && (
              <p className='mt-2'>Selected date: {selectedDate}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
