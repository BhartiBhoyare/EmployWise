import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const User = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      });
      location.href = "/users";
      console.log("POST response:", response);
    } catch (error) {
      console.error("Error posting data:", error);
      alert(error.response.data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-700 p-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-purple-500 flex-1 flex items-center justify-center p-8 text-white"
        >
          <div className="text-center">
            <img
              src="https://www.studymover.de/wp-content/uploads/5337181_2763614-ai-e1674636439270.png"
              alt="Login Illustration"
              className="w-72 mx-auto"
            />
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 p-8 md:p-12 bg-white"
        >
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">
              Welcome back
            </h2>
            <p className="text-gray-500">Login your account</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <button
                onClick={() => User()}
                type="button"
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md hover:from-purple-600 hover:to-indigo-600 transition"
              >
                Login
              </button>
            </div>
            <div className="flex justify-between text-sm">
              <a href="#" className="text-purple-600 hover:underline">
                Create Account
              </a>
              <a href="#" className="text-purple-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
