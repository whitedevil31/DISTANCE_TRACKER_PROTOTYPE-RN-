import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="go to details"
        onPress={() => navigation.navigate("trackDetail")}
      />
      <View style={{ marginTop: 30 }}>
        <Button
          title="go back to sign up"
          onPress={() => navigation.navigate("signUp")}
        />
        <Text>hello</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
