import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-2/5 p-8 mx-auto mt-20 bg-slate-100 shadow-xl rounded-md">
      <form action="">
        <input
          className="block mb-5 w-full p-2 border-green-400 border rounded focus:outline-none focus:shadow-lg transition"
          type="text"
          placeholder="Enter Email"
        />
        <input
          className="block mb-5 w-full p-2 border-green-400 border rounded focus:outline-none focus:shadow-lg transition"
          type="text"
          placeholder="Enter Password"
        />
        <Link>
          <button className="px-8 py-2 bg-green-500 rounded text-white text-xl">
            Log In
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
