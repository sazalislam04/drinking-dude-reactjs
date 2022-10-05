import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const productDetail = useLoaderData().drinks;
  console.log(productDetail);
  return (
    <div className="px-12 lg:px-20 p-8 bg-slate-100">
      {productDetail.map((product) => {
        const {
          strAlcoholic,
          dateModified,
          strCategory,
          strDrink,
          strDrinkThumb,
          strGlass,
          strIngredient1,
          strIngredient2,
          strInstructions,
          strInstructionsDE,
          strInstructionsIT,
        } = product;
        return (
          <>
            <div
              className="bg-slate-200 shadow-xl p-12 rounded-md"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="flex gap-20">
                <img
                  className="h-96 hover:scale-105 transition duration-300 rounded-md"
                  src={strDrinkThumb}
                  alt=""
                />
                <div className="text-neutral-900">
                  <h1 className="text-4xl text-slate-900 mb-2">{strDrink}</h1>
                  <div className="grid grid-cols-2 mb-5">
                    <p className="mb-2 flex gap-2 items-center">
                      <CheckCircleIcon className="h-5 w-5 text-rose-500" />{" "}
                      {dateModified}
                    </p>
                    <p className="mb-2 flex gap-2 items-center">
                      <CheckCircleIcon className="h-5 w-5 text-rose-500" />{" "}
                      {strGlass}
                    </p>
                    <p className="mb-2 flex gap-2 items-center">
                      <CheckCircleIcon className="h-5 w-5 text-rose-500" />{" "}
                      {strAlcoholic}
                    </p>
                    <p className="mb-2 flex gap-2 items-center">
                      <CheckCircleIcon className="h-5 w-5 text-rose-500" />{" "}
                      {strCategory}
                    </p>
                    <p className="mb-2 flex gap-2 items-center">
                      <CheckCircleIcon className="h-5 w-5 text-rose-500" />{" "}
                      {strIngredient1}
                    </p>
                    <p className="mb-2 flex gap-2 items-center">
                      <CheckCircleIcon className="h-5 w-5 text-rose-500" />{" "}
                      {strIngredient2}
                    </p>
                  </div>
                  <p className="mb-2 leading-7">{strInstructions}</p>
                  <p className="mb-2  leading-7">{strInstructionsDE}</p>
                  <p className=" leading-7">{strInstructionsIT}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductDetails;
