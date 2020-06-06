import React, { useEffect, useContext } from "react";
import { Context } from "../context/AuthContext";

const LoadingScreen = () => {
  const { state, localSignin } = useContext(Context);
  useEffect(() => {
    localSignin(), [];
  });

  return null;
};
export default LoadingScreen;
