import Link from "next/link";
import { useRouter } from "next/router";

const NotfoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-8xl font-semibold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-4">Oops! Page not found.</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotfoundPage;
