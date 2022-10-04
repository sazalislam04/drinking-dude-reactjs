import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Layout from "./Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "home", element: <Home /> },
        {
          path: "products",
          loader: async () => {
            return fetch(
              "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
            );
          },
          element: <Products />,
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
