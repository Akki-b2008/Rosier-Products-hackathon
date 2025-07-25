import { NavLink } from "react-router-dom";
import Marquee from "../feraturedProducts/marquee/Marquee";
import "./FeaturedProducts.css";
import products from './Data'


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
                <NavLink to={`/product-details/${product.id}`}>
                  <button className="explore-btn">Explore now</button>
                </NavLink>
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
