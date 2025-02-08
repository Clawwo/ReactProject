import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="mt-4 text-sm text-center text-gray-500">
        Belum punya akun?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Daftar di sini
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
