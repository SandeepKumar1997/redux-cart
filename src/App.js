import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";

import { getDataThunk, sendDataThunk } from "./store/thunk-actions";
let isFirstRender = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const uinotification = useSelector((state) => state.ui.showNotification);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataThunk());
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.change) {
      dispatch(sendDataThunk(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className="App">
      {uinotification && (
        <Notification
          type={uinotification.type}
          message={uinotification.message}
        />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
