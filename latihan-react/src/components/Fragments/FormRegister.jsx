import React from "react";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form className="space-y-4">
      <InputForm
        type="text"
        name="email"
        placeholder="Input Your Email"
        label="Email"
      />
      <InputForm
        type="text"
        name="username"
        placeholder="Your Username"
        label="Username"
      />
      <InputForm
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
      />
      <div className="text-center">
        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
