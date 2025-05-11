const TextArea = ({ name, onChange, value }) => {
  return (
    <div className="relative">
      <label
        className="absolute -top-2 ms-2 bg-white px-2 text-sm"
        htmlFor={name}
      >
        {name}
      </label>
      <textarea
        className="h-24 w-full rounded-xl border border-gray-200 p-2 text-gray-600 focus:border-blue-200 outline-0"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        required
      ></textarea>
    </div>
  );
};

export default TextArea;
