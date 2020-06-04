import React from "react";
import CreateDataContext from "./CreateDataContext";
import trackerApi from "../api/Tracker";
import { AsyncStorage } from "react-native";
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", {
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      dispatch({ type: "add_err", payload: "something went wrong" });
    }
  };
};

const SignIn = (dispatch) => {
  return ({ email, password }) => {};
};

const SignOut = (dispatch) => {
  return () => {};
};

export const { Context, Provider } = CreateDataContext(
  authReducer,
  { signup },
  { token: null, errorMessage: "" }
);
