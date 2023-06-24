import CustomMultipleSelect from "./Form/CustomMultipleSelect";
import CustomeTextField from "./Form/CustomeTextField";

const AddTransactionForm = () => {
  return (
    <div className='flex flex-col items-center mx-auto justify-center'>
      <div className='flex  flex-wrap  justify-center'>
        <CustomeTextField
          title='Farmer Name'
          type='text'
          placeholder='Abebe Kebede'
          id='farmer_name'
        />
        <CustomeTextField
          title='Quantity'
          type='number'
          placeholder='10 lbs'
          id='quantity'
        />
        <CustomMultipleSelect title='Crop' />
        <CustomMultipleSelect title='Kebele' />
      </div>
      <button
        type='submit'
        className='w-80 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'>
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransactionForm;
