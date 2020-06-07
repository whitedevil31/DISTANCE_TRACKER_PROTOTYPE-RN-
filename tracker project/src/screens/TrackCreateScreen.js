import "../_MockLocation";
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import TrackForm from "../components/TrackForm";
import Map from "../components/Map";
import {
  SafeAreaView,
  withNavigation,
  withNavigationFocus,
} from "react-navigation";
import UseLocation from "../hooks/UseLocation";
import { Text, Button } from "react-native-elements";

import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = ({ isFocussed }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = UseLocation(isFocussed, addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>track create</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);
