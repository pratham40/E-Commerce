import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); // New state for error handling
  const navigate = useNavigate();

  useEffect(() => {
    const checkEmailVerification = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams);
        
        const secret = urlParams.get("secret");
        const userId = urlParams.get("userId");

        if (!secret || !userId) {
          setErrorMessage("Invalid verification link.");
          setIsLoading(false);
          return;
        }

        const response = await authService.verifyEmail({ userId, secret });
        if (response) {
          setIsVerified(true);
          setIsLoading(false);
          toast.success("Email verified successfully.");
          navigate("/"); // Redirect to home page after verification
        }
      } catch (error) {
        setErrorMessage(error.message || "Failed to verify email.");
        setIsLoading(false);
        toast.error(error.message || "Failed to verify email.");
      }
    };

    checkEmailVerification();
  }, [navigate]);

  const handleResendVerification = async () => {
    setIsLoading(true);
    try {
      const response = await authService.createVerification();
      if (response) {
        toast.success("Verification email sent successfully.");
      }
    } catch (error) {
      toast.error(error.message || "Failed to resend verification email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Email Verification</h1>

      {isLoading ? (
        <p className="text-lg text-yellow-400">
          <span className="loading loading-dots loading-md"></span>
          Checking your verification status...
        </p>
      ) : isVerified ? (
        <div className="text-center">
          <p className="text-lg text-green-500 mb-4">
            Your email has been successfully verified! 🎉
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-yellow-400 mb-4">
            Your email is not yet verified. Please check your inbox.
          </p>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button
            onClick={handleResendVerification}
            className={`px-6 py-3 text-lg font-medium rounded-md ${
              isLoading
                ? "bg-gray-500"
                : "bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-300"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Resending..." : "Resend Verification Email"}
          </button>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
