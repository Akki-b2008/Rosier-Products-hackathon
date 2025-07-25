import { useParams } from 'react-router-dom';
import './ProductDetailsComp.css';
import productsData from './ProductData'

const ProductDetailsComp = () => {
    const { id } = useParams();
    const product = productsData.find(p => p.id === parseInt(id));

    if (!product) return <p>Product not found.</p>;

    return (
        <div className="product-details">
            <div className="details-container">
                <div className="left-images">
                    {product.images.map((img, index) => (
                        <img src={img} alt={`${product.name} ${index + 1}`} key={index} />
                    ))}
                </div>

                <div className="right-info">
                    <h1>{product.name}</h1>
                    <p className="desc">{product.description}</p>
                    <p className="price">{product.price}</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsComp;
