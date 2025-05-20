import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    signIn(email, password)
      .then((result) => {
        console.log("Login success:", result.user);

        // ✅ Show SweetAlert2 success message
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome, ${result.user.email}`,
          timer: 2000,
          showConfirmButton: false,
        });

        // Redirect after a short delay (optional)
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        console.error("Login failed:", error.message);

        // ❌ Show SweetAlert2 error message
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
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
