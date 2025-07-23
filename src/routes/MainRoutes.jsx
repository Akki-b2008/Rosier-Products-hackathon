import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/home/Home.jsx"));
const Products = lazy(() => import("../pages/products/Products.jsx"));
const ProductDetails = lazy(() =>
  import("../pages/productDetails/ProductDetails.jsx")
);
const AboutUS = lazy(() => import("../pages/aboutUS/AboutUS.jsx"));
const AuthForm = lazy(() => import("../pages/authForm/AuthForm.jsx"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/about" element={<AboutUS />} />
      <Route path="/user" element={<AuthForm />} />
    </Routes>
  );
};

export default MainRoutes;
