import { useState } from "react";

//penggunaan props dan component

function MyButton(props) {
  const { warna = "bg-blue-500", children = "Button" } = props;
  return <button className={`${warna} text-white px-4 py-2 rounded`}>{children}</button>;
}

function App() {
  return <div className="flex justify-center items-center h-screen gap-8 ">
    <MyButton warna="bg-red-500">Button 1</MyButton>
    <MyButton warna="bg-green-500">Button 2</MyButton>
    <MyButton></MyButton>
  </div>;

}

export default App;
