import { Link } from "react-router-dom";
import "./ProductsComp.css";
import ProductsData from './ProductData'


const ProductsComp = () => {
    const categories = [...new Set(ProductsData.map((p) => p.category))];

    return (
        <div className="products-page">
            <div className="img">
                <img
                    src="https://ik.imagekit.io/sl8w2ayuc/Og/rosier_family.webp?updatedAt=1753437714236"
                    alt="cover"
                />
            </div>

            {categories.map((cat) => (
                <section key={cat} className="product-category">
                    <h2>{cat}</h2>
                    <div className="products-wrapper">
                        {ProductsData
                            .filter((item) => item.category === cat)
                            .map((product) => (
                                <div className="product-card" key={product.id}>
                                    <Link to={`/productDetails/${product.id}`}>
                                        <div className="card-top">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                    </Link>
                                    <div className="card-bottom">
                                        <div>
                                            <p className="product-name">{product.name}</p>
                                            <p className="product-desc">{product.description}</p>
                                        </div>

                                        <div className="price-cart">
                                            <span className="price">{product.price}</span>
                                            <button className="add-cart">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ProductsComp;
