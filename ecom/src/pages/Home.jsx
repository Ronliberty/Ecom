import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../components/CartContext';

const Home = () => {
  const { addToCart } = useCart(); // Get addToCart function from context

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99, // Changed to number
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99, // Changed to number
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99, // Changed to number
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="container my-5">
      {/* Search and Categories Section */}
      <div className="text-center mb-4">
        <h1>Welcome to MyEcommerce</h1>
        <div className="input-group mb-3">
          <select className="form-select" aria-label="Select Category">
            <option selected>Choose a category...</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Search for products..."
            aria-label="Search"
          />
          <button className="btn btn-primary" type="button">Search</button>
        </div>
      </div>

      {/* Product Cards Section */}
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p> {/* Display price as string */}
                <button 
                  className="btn btn-primary" 
                  onClick={() => addToCart(product)} // Add to Cart functionality
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
