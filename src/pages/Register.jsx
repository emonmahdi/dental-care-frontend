import React, { useContext } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-[14px]">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your Name"
              className="w-full px-4 py-2 border border-[#CFCFCF] rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            {errors.name && (
              <span className="text-red-400">Name is required</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-[14px]">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-[#CFCFCF] rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            {errors.email && (
              <span className="text-red-400">Email is required</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-[14px]">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-[#CFCFCF] rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            {errors.password && (
              <span className="text-red-400">Email is required</span>
            )}
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-secondary hover:underline">
                Forgot Password?
              </a>
            </div>
            <p>
              Already have an Account{" "}
              <Link to="/login" className="text-primary ms-1">
                Login
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

export default Register;
