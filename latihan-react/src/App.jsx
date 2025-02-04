import { useState } from "react";
import MyButton from "./components/Elements/Button";
//penggunaan props dan component

function App() {
  return <div className="flex items-center justify-center h-screen gap-8 ">
    <MyButton warna="bg-red-500">Button 1</MyButton>
    <MyButton warna="bg-green-500">Button 2</MyButton>
    <MyButton></MyButton>
  </div>;

}

export default App;
