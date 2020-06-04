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
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("mainFlow");
    } catch (err) {
      dispatch({ type: "add_err", payload: "something went wrong" });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("mainFlow");
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
  { signup, signin },
  { token: null, errorMessage: "" }
);
