import React, { useReducer } from "react";
import {v4 as uuid}  from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

function AlertState(props) {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // setAlert
  const setAlert = (msg, type, timeout = 15000) => {
    const id = uuid();
    console.log("tumeitwa","msg",msg,"type",type);

    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      });
    }, timeout);
  };
  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState;