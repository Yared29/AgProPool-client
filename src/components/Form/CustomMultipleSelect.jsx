import CreatableSelect from "react-select/creatable";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const CustomMultipleSelect = ({ title, width = "60" }) => {
  return (
    <div className={"w-" + width + " p-2"}>
      <div className='block mt-2 text-xs font-semibold text-gray-100 uppercase pb-2'>
        {title}
      </div>
      <div className=' min-w-full'>
        <CreatableSelect isMulti options={options} />
      </div>
    </div>
  );
};

export default CustomMultipleSelect;
