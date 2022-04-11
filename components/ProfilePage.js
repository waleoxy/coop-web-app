import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSnackbar } from "notistack";
import jsCookies from "js-cookie";

const ProfilePage = () => {
  // const { state, dispatch } = useContext(Store);
  // const { userInfo } = state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // useEffect(() => {
  //   if (userInfo) {

  //   }
  // });

  const onSubmit = async ({
    firstName,
    lastName,
    userId,
    email,
    phoneNumber,
    password,
  }) => {
    //try {
    //   const data = await axios.post("/api/profile", {
    //     firstName,
    //     lastName,
    //     hospitalId,
    //     email,
    //     phoneNumber,
    //     password,
    //   });
    //   dispatch({ type: "USER_SIGNUP_LOGIN", payload: data });
    //   jsCookies.set("userInfo", JSON.stringify(data));
    //   navigate("/home");
    // } catch (err) {
    //   enqueueSnackbar(getError(err), { variant: "errors" });
    // }
  };
  return (
    <div className="w-auto h-full py-3">
      <div className="flex justify-between">
        <p className="text-blue-900 font-semibold">Your Profile</p>
        <button className="mr-2 py-2 px-8 bg-red-500 text-white rounded-lg mb-2">
          Edit
        </button>
      </div>
      <form
        className="grid grid-cols-3 grid-rows-6 mt-1"
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
          {...register("lastName", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder=" Lastname"
        />
        {errors.lastName
          ? errors.lastName.type === "minLength"
            ? errors.lastName.message
            : "Name is required"
          : ""}

        <input
          className="input"
          {...register("userId", {
            required: true,
            pattern: /^[A-Za-z$0-9]+/i,
          })}
          placeholder=" Your Id"
        />
        {errors.userId
          ? errors.hospitalId.type === "pattern"
            ? "Id is not valid"
            : "Id is required"
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
          {...register("phoneNumber", { required: true })}
          placeholder=" Phone Number"
        />
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
          {...register("Address_a", {
            required: true,
            minLength: {
              value: 2,
              message: "Address should be more than 2 characters",
            },
          })}
          placeholder=" Address 1"
        />
        {errors.lastName
          ? errors.lastName.type === "minLength"
            ? errors.lastName.message
            : "Address is required"
          : ""}
        <input
          className="input"
          {...register("address_b", {
            required: true,
            minLength: {
              value: 2,
              message: "Address should be more than 2 characters",
            },
          })}
          placeholder=" Address 2"
        />
        {errors.address
          ? errors.address.type === "minLength"
            ? errors.address.message
            : "Address is required"
          : ""}
        <input
          className="input"
          {...register("address_c", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder="Address 3"
        />
        <input
          className="input"
          {...register("nextOfKin", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder="Next of kin Name"
        />
        <input
          className="input"
          {...register("nextOfKin", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder="Next of kin Phone Number"
        />
        <input
          className="input"
          {...register("nok_email", {
            required: true,
            pattern: /^[a-z0-9.z_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          placeholder="Next of Kin Email"
        />
        {errors.email
          ? errors.email.type === "pattern"
            ? "Email is not valid"
            : "Email is required"
          : ""}
        <input
          className="input"
          {...register("nextOfKin", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder="Next of kin Address 1"
        />
        {errors.nextOfKin
          ? errors.nextOfKin.type === "minLength"
            ? errors.nextOfKin.message
            : "Address is required"
          : ""}
        <input
          className="input"
          {...register("nextOfKin", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder="Next of kin Address 2"
        />
        <input
          className="input"
          {...register("nextOfKin", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder="Next of kin Address 3"
        />

        <button
          className="bg-blue-800 w-28 mt-3 rounded-xl py-2 px-5 text-white cursor-pointer"
          type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
