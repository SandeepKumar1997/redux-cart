import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const product = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
      <ul>
        {product.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              quantity={item.quantity}
              name={item.name}
              price={item.price}
              total={item.totalPrice}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
