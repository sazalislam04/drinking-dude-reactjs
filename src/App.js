import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";
import Layout from "./Layout/Layout";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "home", element: <Home></Home> },
        {
          path: "products",
          loader: async () => {
            return fetch(
              "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
            );
          },
          element: <Products />,
        },
        {
          path: "/product/:productId",
          loader: async ({ params }) => {
            return fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.productId}`
            );
          },
          element: <ProductDetails />,
        },
        { path: "contact", element: <Contact /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
