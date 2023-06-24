const CustomeTextField = ({
  title,
  type = "text",
  placeholder,
  id,
  width = "60",
}) => {
  return (
    <div className={"w-" + width + " p-2"}>
      <label
        className='block mt-2 text-xs font-semibold text-gray-100 uppercase pb-2'
        htmlFor='username'>
        {title}
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomeTextField;
