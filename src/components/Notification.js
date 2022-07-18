import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Notification = (props) => {
  const ui = useSelector((state) => state.ui.showNotification);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(
      uiActions.handleNotification({
        show: false,
      })
    );
  };

  return (
    <div>
      {ui.show && (
        <Alert onClose={closeHandler} severity={props.type}>
          {props.message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
