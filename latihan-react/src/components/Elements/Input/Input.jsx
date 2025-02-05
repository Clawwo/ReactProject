const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <div>
      <input
        type={type}
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        name={name} autoComplete="off"
      />
    </div>
  );
};

export default Input;
