import Marquee from "../feraturedProducts/marquee/Marquee";
import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "A2 Cow Ghee",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/71O4XwFiS-L._UF1000,1000_QL80_.jpg?updatedAt=1753383539567",
    price: "₹2599",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Stone Pressed Oil",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/3_8b1bd8da-eff1-4e7e-8968-22ee057b6ef8%20(1).webp?updatedAt=1753383540655",
    price: "₹449",
    tag: "New",
  },
  {
    id: 3,
    name: "Raw Forest Honey",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/rosier-foods-pvt-ltd-delhi-yflwxxnwzc.avif?updatedAt=1753383659936",
    price: "₹299",
    tag: "Organic",
  },
  {
    id: 4,
    name: "Flavoured Butter",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/2738c09b-3da0-466d-8d3d-f78e84b72395.__CR0,0,970,600_PT0_SX970_V1___.jpg?updatedAt=1753383540325",
    price: "₹349",
    tag: "Organic",
  },
  {
    id: 5,
    name: "Khapli Aata",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/Bestseller.webp?updatedAt=1753383539736",
    price: "₹449",
    tag: "Combo",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="main">
      <section className="featured-section">
        <div className="featured-header">
          <h2 className="featured-title">Featured Products</h2>
        </div>

        <div className="products-wrapper">
          {products.map((product, index) => (
            <div
              className="product-card"
              key={product.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-tag">{product.tag}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <button className="explore-btn">Explore now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Marquee />
    </div>
  );
};

export default FeaturedProducts;
