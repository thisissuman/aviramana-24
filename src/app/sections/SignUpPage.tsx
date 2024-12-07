"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import aviramam24 from "@/app/assets/aviramam24.svg";
import Image from "next/image";

const SignUpPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
/* eslint-disable @typescript-eslint/no-explicit-any */
  const handleSubmit = (values : any) => {
    console.log("Form Submitted", values);
  };
  /* eslint-disable @typescript-eslint/no-explicit-any */

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-yellow-300">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
        <div className="flex justify-center mb-6">
          <Image src={aviramam24} alt="AVIRAMAN24 Logo" className="h-16" />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            {/* Email (Optional) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email (Optional)
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Sign Up
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUpPage;
