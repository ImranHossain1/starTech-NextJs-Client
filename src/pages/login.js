import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <div className="space-y-4">
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/",
              })
            }
            className="bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 21v-2M3 16.555A9.001 9.001 0 0112 2a9.001 9.001 0 018.155 13.455l-2.063-2.063A6.978 6.978 0 0012 4a6.978 6.978 0 00-6.092 3.442L3.845 5.392A8.962 8.962 0 012 12a8.962 8.962 0 01.845 4.608l2.063-2.063A6.978 6.978 0 0012 20a6.978 6.978 0 006.092-3.442l2.063 2.063A8.962 8.962 0 0122 12a8.962 8.962 0 01-.845-4.608l-2.063 2.063A6.978 6.978 0 0012 20a6.978 6.978 0 01-6.092-3.442L3.845 18.608z"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }
            className="bg-gray-800 text-white p-3 rounded-lg flex items-center justify-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16v-4m0 0V8m0 4h2m-2 9a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
            <span>Sign in with GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
