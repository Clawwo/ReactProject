const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <div className="flex flex-col mb-4">
      <input
        type={type}
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        name={name}
        id={name}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
