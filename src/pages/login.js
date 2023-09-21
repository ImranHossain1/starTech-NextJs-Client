import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  const getReferringUrl = () => {
    const referringUrl = document.referrer;
    return referringUrl || "/";
  };

  const handleSignIn = (provider) => {
    const referringUrl = getReferringUrl();
    signIn(provider, { callbackUrl: referringUrl });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <div className="space-y-4">
          <button
            onClick={() => handleSignIn("google")}
            className="bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center space-x-2"
          >
            Google sign-in button
          </button>
          <button
            onClick={() => handleSignIn("github")}
            className="bg-gray-800 text-white p-3 rounded-lg flex items-center justify-center space-x-2"
          >
            GitHub sign-in button
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
