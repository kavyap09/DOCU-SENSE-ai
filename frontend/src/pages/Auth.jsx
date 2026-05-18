import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";

function Auth() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (isSignup) {
        response = await API.post(
          "/auth/register",
          formData
        );
      } else {
        response = await API.post(
          "/auth/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );
      }

      // save token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // save user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // redirect
      if (response.data.user.domainLocked) {
        navigate("/dashboard");
      } else {
        navigate("/domain-selection");
      }
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#4F6BFF] opacity-20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-sm bg-[#0B1220]/90 backdrop-blur-xl border border-[#1B2237] rounded-3xl p-7 shadow-2xl">

        <div className="flex items-center gap-3 mb-8">

          <div className="w-10 h-10 rounded-2xl bg-[#111827] border border-[#1F2937] flex items-center justify-center">
            <span className="text-base">📄</span>
          </div>

          <h1 className="text-xl font-semibold tracking-tight">
            DocuSense AI
          </h1>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight">
          {isSignup ? "Create account" : "Welcome back"}
        </h2>

        <p className="text-gray-400 text-sm mt-2 leading-6">
          Secure access to your workspace.
        </p>

        <div className="mt-7 bg-[#111827] rounded-2xl p-1 flex">

          <button
            onClick={() => setIsSignup(false)}
            className={`w-1/2 py-2.5 rounded-xl text-sm transition ${
              !isSignup
                ? "bg-[#6C7BFF] text-white"
                : "text-gray-400"
            }`}
          >
            Sign in
          </button>

          <button
            onClick={() => setIsSignup(true)}
            className={`w-1/2 py-2.5 rounded-xl text-sm transition ${
              isSignup
                ? "bg-[#6C7BFF] text-white"
                : "text-gray-400"
            }`}
          >
            Sign up
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-7 space-y-4"
        >

          {isSignup && (
            <div>
              <label className="text-xs text-gray-400">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Kavya"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 bg-[#111827] border border-[#1F2937] rounded-2xl px-4 py-3 text-sm outline-none focus:border-[#6C7BFF]"
              />
            </div>
          )}

          <div>
            <label className="text-xs text-gray-400">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-[#111827] border border-[#1F2937] rounded-2xl px-4 py-3 text-sm outline-none focus:border-[#6C7BFF]"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-[#111827] border border-[#1F2937] rounded-2xl px-4 py-3 text-sm outline-none focus:border-[#6C7BFF]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6C7BFF] hover:bg-[#5B6AF0] transition py-3 rounded-2xl text-sm font-medium mt-2"
          >
            {isSignup ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="text-gray-500 text-xs text-center mt-7 leading-6">
          By continuing you agree to our
          terms and privacy policy.
        </p>
      </div>
    </div>
  );
}

export default Auth;