function MyButton(props) {
  const { warna = "bg-blue-500", children = "Button" } = props;
  return (
    <button className={`${warna} text-white px-4 py-2 rounded`}>
      {children}
    </button>
  );
}

export default MyButton;