import { Text, Button, Input } from "react-native-elements";
import React from "react";
import { View, StyleSheet } from "react-native";
import Spacer from "./Spacer";

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input label="Enter track name" />
      </Spacer>
      <Button title="Start recording" />
    </>
  );
};
export default TrackForm;
