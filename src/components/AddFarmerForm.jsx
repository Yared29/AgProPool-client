import CustomeTextField from "./Form/CustomeTextField";
import CustomMultipleSelect from "./Form/CustomMultipleSelect";

const AddFarmerForm = () => {
  return (
    <div className='flex flex-col items-center mx-auto justify-center'>
      <div className='flex  flex-col  justify-center'>
        <CustomeTextField
          title='Farmer Name'
          type='text'
          placeholder='Abebe Kebede'
          id='farmer_name'
          width='80'
        />
        <CustomMultipleSelect title='Kebele' width='80' />
        <CustomeTextField
          title='Age'
          type='number'
          placeholder='40'
          id='age'
          width='80'
        />
        <CustomMultipleSelect title='Gender' width='80' />
        <CustomeTextField
          title='Phone Number'
          type='phone'
          placeholder='0922998877'
          id='phone'
          width='80'
        />
      </div>
      <button
        type='submit'
        className='w-80 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'>
        Add Farmer
      </button>
    </div>
  );
};

export default AddFarmerForm;
