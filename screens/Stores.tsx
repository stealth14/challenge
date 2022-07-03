import React from "react";
import { View, StyleSheet } from "react-native";
import CustomMap from "../components/CustomMap";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}></View>
      <View style={styles.map}>
        <CustomMap />
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
