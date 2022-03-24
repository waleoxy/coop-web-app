import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ firstName }) => {};

  return (
    <div className="bg-white w-auto min-w-[350px] rounded-xl">
      <form
        className="flex flex-col space-y-6 px-10 py-6"
        onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          {...register("firstName", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder=" Firstname"
        />
        {errors.firstName
          ? errors.firstName.type === "minLength"
            ? errors.firstName.message
            : "Name is required"
          : ""}
        <input
          className="input"
          {...register("lastNameName", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder=" Lastname"
        />
        {errors.lasttName
          ? errors.lastName.type === "minLength"
            ? errors.lastName.message
            : "Name is required"
          : ""}
        <input
          className="input"
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
          className="input"
          {...register("homeAddress", {
            required: true,
            pattern: /^[a-z0-9.z_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          placeholder=" Home Address"
        />
        {errors.email
          ? errors.email.type === "pattern"
            ? "Home address is not valid"
            : "Home address is required"
          : ""}
        <input
          className="input"
          {...register("phoneNumber", {
            required: true,
            pattern: /^[A-Za-z$0-9]+/i,
          })}
          placeholder=" Phone number"
        />
        {errors.phoneNumber
          ? errors.phoneNumber.type === "pattern"
            ? ""
            : "Phone number is required"
          : ""}
        <input
          className="input"
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
        <input
          className="input"
          {...register("confPassword", {
            required: true,
            pattern: /^[A-Za-z$0-9]+/i,
          })}
          placeholder=" Confirm Password"
        />
        {errors.password
          ? errors.confPassword.type === "pattern"
            ? "Password should contain a upper or lowercases or numbers"
            : "Password is required"
          : ""}
        <div className="flex">
          <input
            className="flex-1"
            {...register("referee_a", {
              required: true,
              minLength: {
                value: 2,
                message: "Name should be more than 2 characters",
              },
            })}
            placeholder=" Referee-1 Fullname"
          />
          {errors.referee_a
            ? errors.referee_a.type === "minLength"
              ? errors.referee_a.message
              : "Name is required"
            : ""}
          <input
            className="input"
            {...register("referee_a_id", {
              required: true,
              minLength: {
                value: 2,
                message: "Name should be more than 2 characters",
              },
            })}
            placeholder=" Referee Id"
          />
          {errors.referee_id
            ? errors.referee_id.type === "minLength"
              ? errors.referee_id.message
              : "Name is required"
            : ""}
        </div>
        <div className="flex">
          <input
            className="flex-1"
            {...register("referee_a", {
              required: true,
              minLength: {
                value: 2,
                message: "Name should be more than 2 characters",
              },
            })}
            placeholder=" Referee-2 Fullname"
          />
          {errors.referee_a
            ? errors.referee_a.type === "minLength"
              ? errors.referee_a.message
              : "Name is required"
            : ""}
          <input
            className="input"
            {...register("referee_a_id", {
              required: true,
              minLength: {
                value: 2,
                message: "Name should be more than 2 characters",
              },
            })}
            placeholder=" Referee Id"
          />
          {errors.referee_id
            ? errors.referee_id.type === "minLength"
              ? errors.referee_id.message
              : "Name is required"
            : ""}
        </div>
      </form>
    </div>
  );
};

export default Register;
