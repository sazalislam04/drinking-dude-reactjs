import {
  ExclamationCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
  const {
    strDrinkThumb,
    strCategory,
    strInstructionsDE,
    strAlcoholic,
    idDrink,
    strDrink,
  } = product;
  return (
    <div className="shadow-md card bg-slate-100 relative h-[430px]">
      <img
        className="h-56 w-full rounded-tl rounded-tr"
        src={strDrinkThumb}
        alt=""
      />
      <div className="flex justify-between items-center px-5 mt-3 text-xl">
        <h2>{strDrink}</h2>
        <p>{strAlcoholic}</p>
      </div>
      <div className="p-5">
        <p className="text-rose-500 text-lg">{strCategory}</p>
        <p>
          {strInstructionsDE
            ? strInstructionsDE.slice(0, 50) + "..."
            : strInstructionsDE}
        </p>
      </div>
      <div className="bottom-5 absolute flex px-5 gap-2">
        <Link>
          <button className="px-3 py-1 ring-2 ring-rose-500 rounded-sm text-lg text-slate-900 font-medium flex items-center">
            Add to Cart{" "}
            <span className="text-rose-500">
              <ShoppingBagIcon className="h-5 w-5 ml-2" />
            </span>
          </button>
        </Link>
        <Link to={`/product/${idDrink}`}>
          {" "}
          <button className=" flex items-center px-3 py-1 ring-2 ring-blue-500 rounded-sm text-lg text-slate-900 font-medium">
            Show Details{" "}
            <span className="text-blue-500">
              <ExclamationCircleIcon className="h-5 w-5 ml-2" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
