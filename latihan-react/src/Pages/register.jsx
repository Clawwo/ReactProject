import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="mt-4 text-sm text-center text-gray-500">
        Sudah punya akun?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Masuk di sini
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
