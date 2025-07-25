import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


const Home = lazy(() => import("../pages/home/Home.jsx"));
const Products = lazy(() => import("../pages/products/Products.jsx"));
const ProductDetails = lazy(() =>
  import("../pages/productDetails/ProductDetails.jsx")
);
const AboutUS = lazy(() => import("../pages/aboutUS/AboutUS.jsx"));
const AuthForm = lazy(() => import("../pages/authForm/AuthForm.jsx"));

const Blog = lazy(() => import("../pages/community/Community.jsx"));
const Cart = lazy(() => import("../pages/cart/Cart.jsx"));
const BlogDetails = lazy(() =>
  import("../components/community/blogDetail/BlogDetails.jsx")
);

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/about" element={<AboutUS />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details/:id" element={<BlogDetails />} />
      <Route path="/user" element={<AuthForm />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
