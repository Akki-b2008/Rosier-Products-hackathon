import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import productsData from "./ProductData";
import "./ProductDetailsComp.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0]);

  if (!product) return <div className="not-found">Product not found.</div>;

  return (
    <AnimatePresence mode="wait">
      <div className="pdp-body">
        <div className="pdp-left">
          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt={product.name}
            className="main-image"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.1 }}
          />
          <div className="thumb-column">
            {product.images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`${product.name} ${i + 1}`}
                className={`thumb ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>

        <div className="pdp-right">
          <h1 className="product-title">{product.name}</h1>
          <p className="brand">From <span>{product.brand || "Natural Origin Organics"}</span></p>

          <div className="price-box">
            <span className="old-price">{product.oldPrice || "$11.50"}</span>
            <span className="new-price">{product.price}</span>
          </div>

          <div className="cart-row">
            <button className="btn-primary">Buy Now</button>
            <button className="btn-outline">Add to Cart</button>
          </div>

          <p className="shipping-note">Free Shipping When You Spend $50 or More!</p>

          <div className="tabs-box">
            <h3>Description</h3>
            <p>{product.description}</p>
            <ul>
              {product.keyBenefits.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <h3>Ingredients</h3>
            <ul>
              {product.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3>How to Use</h3>
            <p>{product.howToUse}</p>

            <h3>Storage & Shelf Life</h3>
            <p><strong>Storage:</strong> {product.storageInfo}</p>
            <p><strong>Shelf Life:</strong> {product.shelfLife}</p>
          </div>
        </div>
      </div>

    </AnimatePresence>
  );
}
