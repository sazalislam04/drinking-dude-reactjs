import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState();

  const handleSubmit = (e) => {
    const login = e.target.value;
    if (login === "sazal@gmail.com" || login === "sazal") {
      setIsLogin(login);
    }
  };
  const handleClick = () => {
    if (isLogin) {
      toast("Welcome!");
    } else {
      toast("Please key email and password!");
    }
  };

  return (
    <div
      className="w-[550px] login p-8 mx-auto mt-32 bg-slate-800 shadow-xl rounded-md"
      data-aos="zoom-in"
    >
      <h1 className="text-4xl mb-5 text-slate-100 font-medium">Please Login</h1>
      <form onChange={handleSubmit} action="">
        <input
          className="block mb-5 w-full p-2 border-green-400 border rounded focus:outline-none focus:shadow-lg transition"
          type="text"
          placeholder="E: sazal@gmail.com"
        />
        <input
          className="block mb-5 w-full p-2 border-green-400 border rounded focus:outline-none focus:shadow-lg transition"
          type="text"
          placeholder="P: sazal"
        />
        <Link to={isLogin ? "/home" : ""}>
          <button
            onClick={handleClick}
            className="px-8 py-2 bg-green-500 rounded text-white text-xl"
          >
            Log In
          </button>
          <ToastContainer />
        </Link>
      </form>
    </div>
  );
};

export default Login;
