import React from "react";
import { View, StyleSheet } from "react-native";
import Map from "../components/Map";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}></View>
      <View style={styles.map}>
        <Map />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    flex: 1,
  },
  map: {
    flex: 5,
  },
});
