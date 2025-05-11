const Input = ({ name, type, onChange, value }) => {
  return (
    <div className="relative">
      <label
        className="absolute -top-2 ms-2 bg-white px-2 text-sm capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className="w-full appearance-none rounded-xl border border-gray-200 p-2 text-gray-600 outline-0 focus:border-blue-200 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
