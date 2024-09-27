import React, { useState } from 'react';

const CartPage = () => {
  // Placeholder data for items in the cart
  const initialCartItems = [
    { id: 1, name: 'Product 1', quantity: 2, price: 20, image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Product 2', quantity: 1, price: 15, image: 'https://via.placeholder.com/50' },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent setting quantity less than 1
    setCartItems(cartItems.map(item => (item.id === id ? { ...item, quantity } : item)));
  };

  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <img src={item.image} alt={item.name} className="me-2" style={{ width: '50px', height: '50px' }} />
                <div className="flex-grow-1">
                  <span>{item.name}</span>
                  <div className="d-flex justify-content-between">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="form-control me-2"
                      style={{ width: '60px' }}
                    />
                    <span>${item.price.toFixed(2)} each</span>
                  </div>
                </div>
                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="mt-4">Total: ${totalPrice.toFixed(2)}</h3>
          <button className="btn btn-primary mt-3">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
