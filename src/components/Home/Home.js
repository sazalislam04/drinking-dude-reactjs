import React from "react";
import img from "../../img/profile.png";
const Home = () => {
  return (
    <div className="px-20 bg-slate-200 md:flex gap-4 items-center md:h-[90vh] ">
      <div className="w-full p-5 lg:p-0 lg:w-1/2 ">
        <h1 className="text-4xl lg:text-7xl font-semibold text-slate-900 mb-5">
          Welcome to{" "}
          <span className="text-rose-500 text-2xl lg:text-5xl">
            Drinking Dude
          </span>
        </h1>
        <p className="leading-[1.8]">
          A drink or beverage is a liquid intended for human consumption. In
          addition to their basic function of satisfying thirst, drinks play
          important roles in human culture.{" "}
        </p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
