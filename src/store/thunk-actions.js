import { cartActions } from "./cart-redux";
import { uiActions } from "./ui-slice";

export const sendDataThunk = (cart) => {
  return (dispatch) => {
    dispatch(
      uiActions.handleNotification({
        type: "warning",
        message: "Sending data to the server",
        show: true,
      })
    );

    try {
      const sendRequest = async () => {
        const response = await fetch(
          "https://redux-http-b6fe9-default-rtdb.firebaseio.com/cartItems.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );

        const data = await response.json();
        dispatch(
          uiActions.handleNotification({
            type: "success",
            message: "Successfully sent the Data !",
            show: true,
          })
        );
      };
      sendRequest();
    } catch (error) {
      dispatch(
        uiActions.handleNotification({
          type: "error",
          message: "Something went wrong",
          show: true,
        })
      );
    }
  };
};

export const getDataThunk = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-http-b6fe9-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.reloadDatafromBackend(cartData));
    } catch (err) {
      dispatch(
        uiActions.handleNotification({
          type: "error",
          message: "Something went wrong can't fetch Data",
          show: true,
        })
      );
    }
  };
};
