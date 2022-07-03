import React from "react";
import { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

interface CustomMarkerProps {
  latitude: number;
  longitude: number;
  handlePress: () => void;
}

export default function CustomMarker(props: CustomMarkerProps) {
  const { latitude, longitude, handlePress } = props;
  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      onPress={handlePress}
    >
      <View style={styles.markerWrapper}>
        <View style={styles.item} />
      </View>
    </Marker>
  );
}
const styles = StyleSheet.create({
  markerWrapper: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    height: 22,
    width: 22,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
  },
  item: {
    height: 40,
    width: 40,
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "red",
  },
});
