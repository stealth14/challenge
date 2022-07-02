import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.menu}>
        <Text>menu</Text>
      </View>
      <View style={styles.mapContainer}>
        <Text>map</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "red",
    height: "15%",
  },
  mapContainer: {
    backgroundColor: "cyan",
    height: "85%",
  },
});
