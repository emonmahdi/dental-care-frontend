import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>
        <form className="space-y-5" onSubmit={handleSubmitForm}>
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-[14px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
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
              name="password"
              onChange={(e) => setPassword(e.target.value)}
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
