import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="go to details"
        onPress={() => navigation.navigate("trackDetail")}
      />
      <Text>hello</Text>
    </>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
