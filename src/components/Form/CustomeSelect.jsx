import Select from "react-select";

const CustomeSelect = ({
  field,
  form,
  options,
  isMulti = false,
  placeholder = "Select",
  title,
  width = "60",
  error,
}) => {
  function onChange(option) {
    form.setFieldValue(
      field.name,
      option ? option.map((item) => item.value) : []
    );
  }

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : "";
    }
  };

  if (!isMulti) {
    return (
      <div className={"w-" + width + " p-2"}>
        <div className='block mt-2 text-xs font-semibold text-gray-100 uppercase pb-2'>
          {title}
        </div>
        <Select
          options={options}
          name={field.name}
          value={
            options
              ? options.find((option) => option.value === field.value)
              : ""
          }
          onChange={(option) => form.setFieldValue(field.name, option.value)}
          onBlur={field.onBlur}
          placeholder={placeholder}
        />
        <div className='text-red-500'>{error}</div>
      </div>
    );
  } else {
    return (
      <div className={"w-" + width + " p-2"}>
        <div className='block mt-2 text-xs font-semibold dark:text-white text-black uppercase pb-2'>
          {title}
        </div>
        <Select
          className='react-select-container dark:text-white text-black'
          classNamePrefix='react-select'
          name={field.name}
          value={getValue()}
          onChange={onChange}
          options={options}
          isMulti={true}
          placeholder={placeholder}
        />
        <div className='text-red-500'>{error}</div>
      </div>
    );
  }
};

export default CustomeSelect;
