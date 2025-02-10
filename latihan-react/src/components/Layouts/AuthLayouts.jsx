import React from "react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="mb-4 text-3xl font-bold text-center text-gray-800">
          {title}
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Silakan masukkan email dan password Anda
        </p>
        {children}
        <p className="mt-4 text-sm text-center text-gray-500">
          {type === "login" ? "Belum punya akun?" : "Sudah punya akun?"}
          
          {type === "login" ? (
            <Link
              to="/register"
              className="text-blue-600 hover:underline"
            >
              {" "}Daftar disini
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-blue-600 hover:underline"
            >
              {" "}Masuk disini
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
