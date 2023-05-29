import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity++;
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
    } else {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  const renderCart = () => {
    return cart.map((product, index) => (
      <div key={index}>
        <p>{product.name} ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <button onClick={() => increaseQuantity(index)}>Increase</button>
        <button onClick={() => decreaseQuantity(index)}>Decrease</button>
      </div>
    ));
  };

  return (
    <div>
      <h1>Cart</h1>
      {renderCart()}
    </div>
  );
};

export default Cart;