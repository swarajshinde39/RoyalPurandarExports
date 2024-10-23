import React from "react";
import "./Product.css";
import product_1 from "../../assets/product-1.jpg";
import product_2 from "../../assets/product-2.jpeg";
import product_3 from "../../assets/product-3.webp";
import product_4 from "../../assets/product-4.jpg";
import product_5 from "../../assets/product-5.jpg";
import product_6 from "../../assets/product-6.jpeg";
import product_7 from "../../assets/product-7.jpg";
import product_8 from "../../assets/product-8.jpg";

const Product = () => {
  return (
    <div className="product">
      <div className="product-gallery">
        <div className="product-item">
          <img src={product_1} alt="Product 1" />
          <p>Turmeric Powder</p>
        </div>
        <div className="product-item">
          <img src={product_2} alt="Product 2" />
          <p>Indian Handicraft</p>
        </div>
        <div className="product-item">
          <img src={product_3} alt="Product 3" />
          <p>Idli Rava</p>
        </div>
        <div className="product-item">
          <img src={product_4} alt="Product 4" />
          <p>Red Brick</p>
        </div>
        <div className="product-item">
          <img src={product_5} alt="Product 5" />
          <p>Wooden Pallets</p>
        </div>
        <div className="product-item">
          <img src={product_6} alt="Product 6" />
          <p>Organic Jaggery</p>
        </div>
        <div className="product-item">
          <img src={product_7} alt="Product 7" />
          <p>Raisins</p>
        </div>
        <div className="product-item">
          <img src={product_8} alt="Product 8" />
          <p>Imitation Jwellery</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
