import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async ({}) => {
    //router.push("/dashboard");
  };

  return (
    <div
      className="bg-white flex flex-col items-center justify-center
     w-[350px] rounded-xl">
      <p
        className="text-center py-4 text-3xl font-serif 
      text-gray-600 tracking-wider">
        Login
      </p>
      <form
        className="flex flex-col space-y-4 px-10 py-5"
        onSubmit={handleSubmit(onSubmit)}>
        <input
          className="loginput"
          {...register("user_id", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder=" User Id"
        />
        {errors.referee_id
          ? errors.referee_id.type === "minLength"
            ? errors.referee_id.message
            : "Name is required"
          : ""}

        <input
          className="loginput"
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9.z_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          placeholder=" Email"
        />
        {errors.email
          ? errors.email.type === "pattern"
            ? "Email is not valid"
            : "Email is required"
          : ""}

        <input
          className="loginput"
          {...register("password", {
            required: true,
            pattern: /^[A-Za-z$0-9]+/i,
          })}
          placeholder=" Password"
        />
        {errors.password
          ? errors.password.type === "pattern"
            ? "Password should contain a upper or lowercases or numbers"
            : "Password is required"
          : ""}
        <button
          className="px-4 py-1 w-28 bg-pink-700 text-white font-medium font-serif
          rounded-lg text-lg tracking-widest">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
