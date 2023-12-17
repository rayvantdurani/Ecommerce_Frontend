import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "../src/Components/Sections/LandingSection/Home.jsx";
import Mens from "./Components/Sections/Mens/Mens.jsx";
import Women from "./Components/Sections/Women/Women.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Men",
        element: <Mens />,
      },
      {
        path: "Women",
        element: <Women />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
