"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [form, setForm] = useState({
    email: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
      newErrors.email = "Invalid email address";
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
    // Here you would send form data to your backend
    // Reset form for demo
    setForm({ email: "" });
    setErrors({});
  };

  return (
    <div className="bg-create-user min-h-screen w-full bg-cover flex justify-center items-center px-2 sm:px-4">
      <div className="bg-white p-4 sm:p-6 md:p-8 max-w-full sm:max-w-[90vw] md:max-w-[675px] w-full rounded-2xl md:rounded-3xl mt-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black py-4 sm:py-6 text-center lg:text-start break-words">
          Forgot Password?
        </h2>

        {/* Back Button */}
        <div className="flex justify-start mb-6">
          <Link href="/login" className="text-blue-500 text-base hover:underline">
            &lt; Back to Login
          </Link>
        </div>

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
              className={`py-3 px-5 rounded-lg border ${
                errors.email ? "border-red-500" : "border-[#EAECF0]"
              } text-base text-[#777980]`}
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Send email"
            className="w-full bg-[image:var(--create-user-button-bg)] cursor-pointer my-6 py-4 rounded-full"
          />
          {submitted && (
            <div className="text-green-600 text-center mb-2">
              Password reset email sent!
            </div>
          )}
        </form>

        {/* Or Divider */}
        <div className="flex items-center mb-4">
          <hr className="flex-grow border-t border-[#EDE3D9]" />
          <span className="mx-4 text-gray-600">Or</span>
          <hr className="flex-grow border-t border-[#EDE3D9]" />
        </div>

        <p className="text-center mt-6">
          Remember your password?{" "}
          <Link href="/login" className="text-[#DCA04A] font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
