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
        <Text>hello</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
