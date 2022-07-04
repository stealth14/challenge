import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text, Button } from "react-native";
import CustomMap from "../components/CustomMap";
import { BottomSheet } from "react-native-btr";
import Store from "../lib/Store";
import StoreSheet from "../components/StoreSheet";
import { NavigationContext } from "@react-navigation/native";

export default function HomeScreen() {
  const [store, setStore] = useState<Store | null>(null);
  const navigation = React.useContext(NavigationContext);

  const toggle = () => {
    setStore(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}></View>
      <View style={styles.map}>
        <CustomMap
          handleStore={(currentStore: Store) => {
            setStore(currentStore);
          }}
        />
      </View>

      <BottomSheet
        visible={!!store}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={styles.bottomNavigationView}>
          {store && (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <StoreSheet
                handleWatchMore={() => {
                  navigation.navigate("Tienda");
                }}
                store={store}
              />
              <View style={{ flex: 1, flexDirection: "row" }}></View>
            </View>
          )}
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
  },
  map: {
    flex: 5,
  },
  bottomNavigationView: {
    backgroundColor: "white",
    width: "100%",
    height: 250,
  },
});
