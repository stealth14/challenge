import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text, Button } from "react-native";
import CustomMap from "../components/CustomMap";
import { BottomSheet } from "react-native-btr";

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}></View>
      <View style={styles.map}>
        <CustomMap />
      </View>

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                padding: 20,
                fontSize: 20,
              }}
            >
              Share Using
            </Text>
            <View style={{ flex: 1, flexDirection: "row" }}></View>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    flex: 1,
    backgroundColor: "red",
  },
  map: {
    flex: 5,
    backgroundColor: "green",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});
