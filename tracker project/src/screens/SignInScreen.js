import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";
import { NavigationEvents } from "react-navigation";
import { Context } from "../context/AuthContext";

const SignInScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="SignIn to your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonTitle="Sign In"
      />
      <NavLink routeName="signUp" text="Don't have an account?Sign up " />
    </View>
  );
};
SignInScreen.navigationOptions = () => {
  return { headerShown: false };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
export default SignInScreen;
