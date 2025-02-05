import React from 'react'
import InputForm from '../Elements/Input'

const FormLogin = () => {
    return (
      <div className="flex items-center justify-center h-screen gap-8 ">
        <form action="">
          <InputForm
            type="text"
            name="email"
            placeholder="farel@gmail.com"
            label="Email"
          ></InputForm>
          <InputForm
            type="password"
            name="password"
            placeholder="********"
            label="Password"
          ></InputForm>
        </form>
      </div>
    );
}

export default FormLogin