import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import productsData from "./ProductData"; 
import "./ProductDetailsComp.css";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = productsData.find((p) => p.id === +id);
//   if (!product) return <div>Product not found.</div>;

//   return (
//     <AnimatePresence mode="wait">
//       <motion.main
//         className="pdp"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         key={id}
//       >
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           ← Back
//         </button>

//         <nav className="breadcrumbs">
//           Home / {product.category} / {product.name}
//         </nav>

//         <div className="pdp-body">
//           <motion.div
//             className="gallery"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: {},
//               visible: { transition: { staggerChildren: 0.2 } },
//             }}
//           >
//             {productsData.images.map((img, i) => (
//               <motion.img
//                 key={i}
//                 src={img}
//                 alt={product.name}
//                 className={`thumb thumb-${i}`}
//                 whileHover={{ scale: 1.1 }}
//                 variants={{
//                   hidden: { opacity: 0, scale: 0.9 },
//                   visible: { opacity: 1, scale: 1 },
//                 }}
//               />
//             ))}
//             <motion.div
//               className="main-image"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <img src={productsData.images[0]} alt={product.name} />
//             </motion.div>
//           </motion.div>

//           <motion.section
//             className="info"
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="title">{product.name}</h1>
//             <div className="price">{product.price}</div>
//             <p className="desc">{product.description}</p>
//             <button className="btn-add">Add to Cart</button>
//             <div className="trust">
//               Grass‑fed · Small‑batch · Ethically sourced
//             </div>
//           </motion.section>
//         </div>

//         <motion.div
//           className="product-details-tabs"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           <div className="tab-heading">Product Details</div>
//           <div className="tab-content">
//             <p>{product.details}</p>
//           </div>
//         </motion.div>
//       </motion.main>
//     </AnimatePresence>
//   );
// }


// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const product = productsData.find((p) => p.id === Number(id));
//   if (!product) return <div>Product not found.</div>;

//   return (
//     <AnimatePresence mode="wait">
//       <motion.main
//         className="pdp"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         key={id}
//       >
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           ← Back
//         </button>

//         <nav className="breadcrumbs">
//           Home / {product.category} / {product.name}
//         </nav>

//         <div className="pdp-body">
//           {/* Left - Image Gallery */}
//           <motion.div
//             className="gallery"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: {},
//               visible: { transition: { staggerChildren: 0.2 } },
//             }}
//           >
//             <motion.div
//               className="main-image"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <img src={product.images[0]} alt={product.name} />
//             </motion.div>

//             <div className="thumbnail-row">
//               {product.images.map((img, i) => (
//                 <motion.img
//                   key={i}
//                   src={img}
//                   alt={`${product.name} ${i + 1}`}
//                   className={`thumb thumb-${i}`}
//                   whileHover={{ scale: 1.1 }}
//                   variants={{
//                     hidden: { opacity: 0, scale: 0.9 },
//                     visible: { opacity: 1, scale: 1 },
//                   }}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           <motion.section
//             className="info"
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="title">{product.name}</h1>
//             <div className="price">{product.price}</div>
//             <p className="desc">{product.description}</p>
//             <button className="btn-add">Add to Cart</button>
//             <div className="trust">
//               Grass‑fed · Small‑batch · Ethically sourced
//             </div>
//           </motion.section>
//         </div>

//         <motion.div
//           className="product-details-tabs"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           <div className="tab-heading">Product Details</div>
//           <div className="tab-content">
//             <p>{product.details || "Coming soon..."}</p>
//           </div>
//         </motion.div>
//       </motion.main>
//     </AnimatePresence>
//   );
// }




// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const product = productsData.find((p) => p.id === Number(id));
//   if (!product) return <div className="not-found">Product not found.</div>;

//   return (
//     <AnimatePresence mode="wait">
//       <motion.main
//         className="pdp"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         key={id}
//       >
//         {/* Back Button */}
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           ← Back
//         </button>

//         {/* Breadcrumbs */}
//         <nav className="breadcrumbs">
//           Home / {product.category} / {product.name}
//         </nav>

//         {/* Body */}
//         <div className="pdp-body">
//           {/* Gallery */}
//           <motion.div
//             className="gallery"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: {},
//               visible: { transition: { staggerChildren: 0.2 } },
//             }}
//           >
//             {/* Main Image */}
//             <motion.div
//               className="main-image"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <img src={product.images[0]} alt={product.name} />
//             </motion.div>

//             {/* Thumbnails */}
//             <div className="thumbnail-row">
//               {product.images.map((img, i) => (
//                 <motion.img
//                   key={i}
//                   src={img}
//                   alt={`${product.name} ${i + 1}`}
//                   className="thumb"
//                   whileHover={{ scale: 1.1 }}
//                   variants={{
//                     hidden: { opacity: 0, scale: 0.9 },
//                     visible: { opacity: 1, scale: 1 },
//                   }}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           {/* Info Section */}
//           <motion.section
//             className="info"
//             initial={{ x: 60, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="title">{product.name}</h1>
//             <div className="price">{product.price}</div>
//             <p className="desc">{product.description}</p>
//             <button className="btn-add">Add to Cart</button>
//             <div className="trust">
//               Grass‑fed · Small‑batch · Ethically sourced
//             </div>
//           </motion.section>
//         </div>

//         {/* Product Tabs */}
//         <motion.div
//           className="product-details-tabs"
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           <div className="tab-heading">More About This Product</div>
//           <div className="tab-content">
//             {product.details ? (
//               <ul className="points">
//                 {product.details.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>Details coming soon...</p>
//             )}
//           </div>
//         </motion.div>
//       </motion.main>
//     </AnimatePresence>
//   );
// }


export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = productsData.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.images
  );

  if (!product) return <div className="not-found">Product not found.</div>;

  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="pdp"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={id}
      >
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* Breadcrumbs */}
        <nav className="breadcrumbs">
          Home / {product.category} / {product.name}
        </nav>

        {/* Body */}
        <div className="pdp-body">
          {/* Gallery */}
          <motion.div
            className="gallery"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Main Image */}
            <motion.div
              className="main-image"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={selectedImage} alt={product.name} />
            </motion.div>

            {/* Thumbnails */}
            <div className="thumbnail-row">
              {product.images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  className={`thumb ${
                    selectedImage === img ? "selected" : ""
                  }`}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedImage(img)}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.section
            className="info"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="title">{product.name}</h1>
            <div className="price">{product.price}</div>
            <p className="desc">{product.description}</p>
            <button className="btn-add">Add to Cart</button>
            <div className="trust">
              Grass‑fed · Small‑batch · Ethically sourced
            </div>
          </motion.section>
        </div>

        {/* Product Tabs */}
        <motion.div
          className="product-details-tabs"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="tab-heading">More About This Product</div>
          <div className="tab-content">
            {product.details ? (
              <ul className="points">
                {product.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>Details coming soon...</p>
            )}
          </div>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}
