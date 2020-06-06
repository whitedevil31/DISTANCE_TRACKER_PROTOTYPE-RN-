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
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};
const localSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("trackList");
  } else {
    navigate("signUp");
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

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("signUp");
};

export const { Context, Provider } = CreateDataContext(
  authReducer,
  { signup, signin, clearErrorMessage, localSignin, signout },
  { token: null, errorMessage: "" }
);
