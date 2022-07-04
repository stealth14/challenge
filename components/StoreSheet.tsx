import React from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import Store from "../lib/Store";
import Attribute from "../components/Attribute";
import Item from "../components/Item";

interface StoreSheetProps {
  store: Store;
  handleWatchMore?: () => void;
}

export default function StoreSheet(props: StoreSheetProps) {
  const { store, handleWatchMore } = props;
  const { direction, distance, schedule } = store;

  return (
    <View style={{ height: "100%" }}>
      <View style={{ flex: 4 }}>
        <View style={styles.content}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Image
              style={styles.logo}
              source={require("../assets/company.png")}
            />
            {handleWatchMore && (
              <Button title="Mostrar más" onPress={handleWatchMore} />
            )}
          </View>
          <View style={styles.attributes}>
            <Attribute icon={"map-marker-alt"} label={direction} />
            <Attribute icon={"clock"} label={schedule} />
          </View>
        </View>
      </View>
      <View style={{ flex: 2, borderTopColor: "lightgray", borderTopWidth: 2 }}>
        <View style={styles.footer}>
          <Item label={"DISTANCIA"} value={`${distance} km`} />
          <Item label={"TIEMPO"} value={`${distance} min`} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  attributes: {
    height: 80,
  },
  logo: {
    width: 150,
    height: 40,
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
  },
});
