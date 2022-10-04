import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();
  const allProducts = products.drinks;
  return (
    <div className=" px-12 lg:px-20 bg-slate-200 py-5">
      <h1 className="text-4xl text-center p-5 mb-8">Popular Drinks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProducts.map((product) => (
          <Product key={product.idDrink} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
