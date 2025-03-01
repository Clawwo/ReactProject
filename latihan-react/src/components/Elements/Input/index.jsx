import React from "react";
import Input from "./Input";
import Label from "./Label";

export default function InputForm(props) {
  const { type, name, placeholder, label} = props;
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="block mb-2 font-bold text-gray-700">{label}</label>
      <Input type= {type} name={name} placeholder={placeholder} className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
  );
}

