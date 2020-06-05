import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(Context);
  return;
  <>
    <Spacer />
    <Text h3>Account screen</Text>
    <Spacer />
    <Button title="Sign out" onPress={signout} />
  </>;
};

const styles = StyleSheet.create({});
export default AccountScreen;
