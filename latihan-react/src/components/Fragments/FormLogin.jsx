import React from "react";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form className="space-y-4">
      <InputForm
        type="text"
        name="email"
        placeholder="farel@gmail.com"
        label="Email"
      />
      <InputForm
        type="password"
        name="password"
        placeholder="********"
        label="Password"
      />
      <div className="text-center">
        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
