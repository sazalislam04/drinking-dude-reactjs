import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-slate-900 text-white h-16 flex justify-between items-center px-12 lg:px-20">
      <Link className="text-2xl lg:text-3xl">Drinking Dude</Link>
      <ul
        className={`lg:flex items-center gap-12 text-xl mt-[254px] lg:mt-0 ${
          open
            ? "right-0 absolute rounded-bl-md w-48 bg-slate-700 text-center p-5 h-48 duration-500 ease-in z-10"
            : "right-[-240px] hidden "
        }`}
      >
        <li className="mb-3 lg:mb-0">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="mb-3 lg:mb-0">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="mb-3 lg:mb-0">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {/* <li>
          <NavLink to="/login">Login</NavLink>
        </li> */}
      </ul>
      <div onClick={handleOpen} className="lg:hidden">
        {open ? (
          <XMarkIcon className="h-8 w-8 cursor-pointer text-rose-500" />
        ) : (
          <Bars3BottomRightIcon className="h-8 w-8 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Header;
