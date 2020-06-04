import { withNavigation } from "react-navigation";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "blue",

    paddingHorizontal: 50,
  },
});
export default withNavigation(NavLink);
