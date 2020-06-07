import * as Location from "expo-location";
const tenmeterswithdegrees = 0.0001;
const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      accuracy: 5,
      heading: 0,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 12.611976 + increment * tenmeterswithdegrees,
      longitude: 79.774666 + increment * tenmeterswithdegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
