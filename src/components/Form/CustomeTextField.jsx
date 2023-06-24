const CustomeTextField = ({
  title,
  type = "text",
  placeholder,
  id,
  width = "60",
  handleChange,
  handleBlur,
  value,
  error,
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
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      <div className='text-red-500'>{error}</div>
    </div>
  );
};

export default CustomeTextField;
