// Router
// https://youtu.be/AVrOr3Mxl20
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Products from "./routes/Products"
import Cart from "./routes/Cart";
import Contact from "./routes/Contact";
import ErrorPage from "./error_pages/ErrorPage";
import Footer from "./components/Footer";
import "./index.css";
import CardTest from "./routes/CardTest";
import ImageSlider from "./test/ImageSlider";
import { SliderData } from "./test/SliderData";
import ScrollButton from "./components/ScrollButton";
import { useState } from 'react';



const AppLayout = () => {

  
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollButton />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "products",
        element: <Products 
        />,
      },
      {
        path: "card-test",
        element: <CardTest />,
      },
      // {
      //   path: "slider-test",
      //   element: <ImageSlider slides={SliderData} />,
      // },
      {
        path: "cart",
        element: <Cart />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
