"use client";

import Link from "next/link";
import React, { useState } from "react";
import google from "@/public/google-icon.png";
import facebook from "@/public/social-icon.png";
import Image from "next/image";

export default function Page() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    // Handle the login process here
    // Reset form for demo
    setForm({
      email: "",
      password: "",
      rememberMe: false,
    });
    setErrors({});
  };

  return (
    <div className="bg-auth-common min-h-screen w-full bg-cover flex justify-center items-center px-2 sm:px-4">
      <div className="bg-white p-4 sm:p-6 md:p-8 max-w-full sm:max-w-[90vw] md:max-w-[675px] w-full rounded-2xl md:rounded-3xl mt-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black py-4 sm:py-6 text-center lg:text-start break-words">
          Login to your account
        </h2>
        <form className="mt-4 sm:mt-6" onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="flex flex-col gap-2.5 mt-4">
            <label htmlFor="email" className="text-lg text-[#4A4C56]">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Input your email"
              className={`py-3 px-5 rounded-lg border ${errors.email ? "border-red-500" : "border-[#EAECF0]"} text-base text-[#777980]`}
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2.5 mt-4">
            <label htmlFor="password" className="text-lg text-[#4A4C56]">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className={`py-3 px-5 rounded-lg border ${errors.password ? "border-red-500" : "border-[#EAECF0]"} text-base text-[#777980]`}
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password}</span>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mt-3">
            <div>
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={form.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe" className="text-base text-[#777980] ml-2">
                Remember Me
              </label>
            </div>

            <Link href="#" className="text-base text-[#777980]">
              Forgot Password
            </Link>
          </div>

          {/* Login Button */}
          <input
            type="submit"
            value="Log In"
            className="w-full bg-[image:var(--create-user-button-bg)] cursor-pointer my-6 py-4 rounded-full"
          />
          {submitted && (
            <div className="text-green-600 text-center mb-2">Login successful!</div>
          )}
        </form>

        {/* Or Divider */}
        <div className="flex items-center mb-4">
          <hr className="flex-grow border-t border-[#EDE3D9]" />
          <span className="mx-4 text-gray-600">Or</span>
          <hr className="flex-grow border-t border-[#EDE3D9]" />
        </div>

        {/* Google and Facebook Login */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="#" className="flex items-center gap-3 py-3 px-12 border border-[#4A4C56] rounded-4xl w-full md:w-auto">
            <Image src={google} alt="google" />
            <p className="text-base text-[#777980]">Register with Google</p>
          </Link>
          <Link href="#" className="flex items-center gap-3 py-3 px-12 border border-[#4A4C56] rounded-4xl w-full md:w-auto">
            <Image src={facebook} alt="facebook" />
            <p className="text-base text-[#777980]">Register with Facebook</p>
          </Link>
        </div>

        <p className="text-center mt-6">
          Don't have an account? <Link href="/create-user" className="text-[#DCA04A] font-medium">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
