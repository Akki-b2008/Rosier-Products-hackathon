import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "A2 Gir Cow Ghee",
    image: "/images/ghee.webp",
    price: "₹899",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Cold Pressed Coconut Oil",
    image: "/images/coconut-oil.webp",
    price: "₹449",
    tag: "New",
  },
  {
    id: 3,
    name: "Raw Forest Honey",
    image: "/images/honey.webp",
    price: "₹299",
    tag: "Organic",
  },
  {
    id: 4,
    name: "Pooja Essentials Pack",
    image: "/images/pooja-pack.webp",
    price: "₹749",
    tag: "Combo",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-container">
      <h2 className="featured-heading">Featured Products</h2>
      <div className="horizontal-track">
        {products.map((product, index) => (
          <div
            className="product-card fade-in"
            key={product.id}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <span className="tag">{product.tag}</span>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="product-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
