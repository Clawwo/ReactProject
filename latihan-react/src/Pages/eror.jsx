import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">
          Oops! Halaman yang Anda cari tidak ditemukan.
        </p>
        <p className="mt-2 text-gray-500">
          Halaman ini mungkin telah dihapus atau Anda salah mengetik URL.
        </p>
        <div className="mt-6">
          <a
            href="/register"
            className="px-6 py-3 text-lg font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
