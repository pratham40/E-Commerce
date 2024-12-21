import React from "react";
import { useNavigate } from "react-router-dom";

const OAuthFailPage = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/login"); // Navigate back to the login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">OAuth Login Failed</h1>
      <p className="text-lg mb-4 text-red-500">
        Unfortunately, we couldn't log you in. Please try again.
      </p>
      <button
        onClick={handleRetry}
        className="px-6 py-3 text-lg font-medium rounded-md bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-300 mb-4"
      >
        Retry Login
      </button>
      <button
        onClick={() => navigate("/")} // Navigate to the homepage or another section
        className="px-6 py-3 text-lg font-medium rounded-md bg-gray-500 hover:bg-gray-600 focus:ring focus:ring-gray-300"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default OAuthFailPage;
