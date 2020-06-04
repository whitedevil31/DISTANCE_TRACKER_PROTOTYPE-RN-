import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { navigate } from "../navigationRef";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        errorMessage={state.errorMessage}
        headerText="Sign up for Tracker"
        onSubmit={signup}
        submitButtonTitle="Sign up"
      />
      <NavLink text="Already have a account? Sign in " routeName="signIn" />
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return { headerShown: false };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
export default SignUpScreen;
