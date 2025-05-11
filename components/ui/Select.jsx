const Select = ({ name, options, onChange, value }) => {
  return (
    <div className="relative">
      <label
        className="absolute -top-2 ms-2 bg-white px-2 text-sm capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      <select
        className="w-full appearance-none rounded-xl border border-gray-200 p-2 text-gray-600 outline-0 focus:border-blue-200"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      >
        <option value="" disabled>
          Select {name}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
