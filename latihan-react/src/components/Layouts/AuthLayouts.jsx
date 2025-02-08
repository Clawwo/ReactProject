import React from 'react'
import FormLogin from '../Fragments/FormLogin'

const AuthLayouts = (props) => {
    const {children, title} = props
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
        </div>
      </div>
    );
}

export default AuthLayouts