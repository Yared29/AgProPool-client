import CreatableSelect from "react-select/creatable";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const CustomCreatableSelect = ({
  title,
  width = "60",
  handleChange,
  handleBlur,
  value,
}) => {
  return (
    <div className={"w-" + width + " p-2"}>
      <div className='block mt-2 text-xs font-semibold dark:text-white text-black  uppercase pb-2'>
        {title}
      </div>
      <div className=' min-w-full'>
        <CreatableSelect
          isMulti
          options={options}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      </div>
    </div>
  );
};

export default CustomCreatableSelect;
