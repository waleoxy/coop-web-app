import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSnackbar } from "notistack";
import jsCookies from "js-cookie";
import { Store } from "../contexts/store";
import { getError } from "../contexts/error";

const ProfilePage = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [isEnabled, setIsEnabled] = useState(true);

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
    address_a,
    address_b,
    address_c,
    nok_name,
    nok_email,
    nok_phoneNumber,
    nok_address_a,
    nok_address_b,
    nok_address_c,
    referee_a,
    referee_b,
  }) => {
    try {
      const { data } = await axios.put("/api/users/profile", {
        userId,
        firstName,
        lastName,
        userId,
        email,
        phoneNumber,
        password,
        address_a,
        address_b,
        address_c,
        nok_name,
        nok_email,
        nok_phoneNumber,
        nok_address_a,
        nok_address_b,
        nok_address_c,
        referee_a,
        referee_b,
      });
      console.log("up", data);
      dispatch({ type: "USER_LOGIN", payload: data });
      jsCookies.set("userInfo", JSON.stringify(data));
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: "errors" });
    }
    setIsEnabled(true);
  };
  const handleEnableInput = () => {
    setIsEnabled(false);
  };

  return (
    <div className="w-auto h-full py-3">
      <div className="flex justify-between">
        <p className="text-blue-900 font-semibold">Your Profile</p>
        <button
          onClick={handleEnableInput}
          className="mr-2 py-2 px-8 bg-red-500 text-white rounded-lg mb-2">
          Edit
        </button>
      </div>
      <form
        className="grid grid-cols-3 grid-rows-6 mt-1"
        onSubmit={handleSubmit(onSubmit)}>
        <input
          disabled={isEnabled}
          className="input"
          {...register("firstName", {
            value: userInfo?.firstName,
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
          disabled={isEnabled}
          className="input"
          {...register("lastName", {
            value: userInfo?.lastName,
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
          disabled={isEnabled}
          className="input"
          {...register("userId", {
            value: userInfo?._id,
            required: true,
            pattern: /^[A-Za-z$0-9]+/i,
          })}
          placeholder=" Your Id"
        />
        {errors.userId
          ? errors.userId.type === "pattern"
            ? "Id is not valid"
            : "Id is required"
          : ""}
        <input
          disabled={isEnabled}
          className="input"
          {...register("email", {
            value: userInfo?.email,
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
          disabled={isEnabled}
          className="input"
          {...register("phoneNumber", {
            value: userInfo?.phoneNumber,
            required: true,
          })}
          placeholder=" Phone Number"
        />
        <input
          disabled={isEnabled}
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
          disabled={isEnabled}
          className="input"
          {...register("address_a", {
            value: userInfo?.address_a,
            required: true,
            minLength: {
              value: 2,
              message: "Address should be more than 2 characters",
            },
          })}
          placeholder=" Address 1"
        />
        {errors.address_a
          ? errors.address_a.type === "minLength"
            ? errors.address_a.message
            : "Address is required"
          : ""}
        <input
          disabled={isEnabled}
          className="input"
          {...register("address_b", {
            value: userInfo?.address_b,
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
          disabled={isEnabled}
          className="input"
          {...register("address_c", {
            value: userInfo?.address_c,
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder="Address 3"
        />
        <input
          disabled={isEnabled}
          className="input"
          {...register("nok_name", {
            value: userInfo?.nok_name,
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder="Next of kin fullname"
        />
        <input
          disabled={isEnabled}
          className="input"
          {...register("nok_phoneNumber", {
            value: userInfo?.nok_phoneNumber,
            required: true,
          })}
          placeholder="Next of kin phone number"
        />
        <input
          disabled={isEnabled}
          className="input"
          {...register("nok_email", {
            required: true,
            pattern: /^[a-z0-9.z_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          placeholder="Next of kin email"
        />
        {errors.email
          ? errors.email.type === "pattern"
            ? "Email is not valid"
            : "Email is required"
          : ""}
        <input
          disabled={isEnabled}
          className="input"
          {...register("nok_address_a", {
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
          disabled={isEnabled}
          className="input"
          {...register("nok_address_b", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder="Next of kin Address 2"
        />
        <input
          disabled={isEnabled}
          className="input"
          {...register("nok_address_c", {
            required: true,
            minLength: {
              value: 2,
              message: "Name should be more than 2 characters",
            },
          })}
          placeholder="Next of kin Address 3"
        />
        <input
          disabled
          className="input"
          {...register("referee_a")}
          placeholder="Referee 1"
        />
        <input
          disabled
          className="input"
          {...register("referee_b")}
          placeholder="Referee 2"
        />

        <button
          className="bg-blue-900 w-[94px] ml-[172px] mt-1 rounded-lg py-2 text-white cursor-pointer"
          type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
