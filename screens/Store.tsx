import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import StoreSheet from "../components/StoreSheet";
import Store from "../lib/Store";
import { FontAwesome5 } from "@expo/vector-icons";

export default function StoreScreen({ route, navigation }) {
  const { name, distance, services } = route.params;
  return (
    <View>
      <View style={{ height: 300 }}>
        <StoreSheet store={route.params as Store} />
      </View>
      <View style={{ height: 300 }}>
        <ScrollView horizontal={true}>
          {services.map((service, index) => {
            return <Service service={service} key={index} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const Service = (props: { service: any }) => {
  const { service } = props;
  return (
    <View style={styles.content}>
      <View style={{ margin: 10 }}>
        <FontAwesome5 name={service.icon} size={40} color="#677581" />
      </View>
      <View style={styles.name}>
        <Text>{service.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 5,
    color: "#677581",
    backgroundColor: "#F5F7FA",
    textAlign: "center",
    flexDirection: "column",
    alignContent: "center",
    width: 130,
    height: 130,
    margin: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: "lightgray",
  },
  name: { margin: 10 },
});
