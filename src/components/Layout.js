import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Layout = () => {
  const totalPrice = useSelector((state) => state.cart.itemsList);
  const showCart = useSelector((state) => state.cart.showCart);
  let total = 0;
  totalPrice.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
