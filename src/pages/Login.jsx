import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-[14px]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-[#CFCFCF] rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-[14px]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-[#CFCFCF] rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-secondary hover:underline">
                Forgot Password?
              </a>
            </div>
            <p>
              New to Dental Care{" "}
              <Link to="/register" className="text-primary ms-1">
                Create new Account
              </Link>{" "}
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded-md hover:bg-primary cursor-pointer transition"
          >
            Login
          </button>
        </form>

        <div className="my-2 flex items-center justify-center">
          <span className="text-gray-400 text-sm"> OR </span>
        </div>

        <button className="w-full border border-secondary rounded-lg py-2 hover:bg-secondary hover:text-white cursor-pointer">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
