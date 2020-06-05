import React from "react";
import CreateDataContext from "./CreateDataContext";
import trackerApi from "../api/Tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clearError":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clearError" });
};
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("trackList");
    } catch (err) {
      dispatch({
        type: "add_err",
        payload: "something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("trackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in ",
      });
    }
  };
};

const SignOut = (dispatch) => {
  return () => {};
};

export const { Context, Provider } = CreateDataContext(
  authReducer,
  { signup, signin, clearErrorMessage },
  { token: null, errorMessage: "" }
);
