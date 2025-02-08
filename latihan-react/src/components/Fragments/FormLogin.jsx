import React from "react";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="mb-4 text-3xl font-bold text-center text-gray-800">
          Login
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Silakan masukkan email dan password Anda
        </p>
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
        <p className="mt-4 text-sm text-center text-gray-500">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
