import React from "react";
import { View, Text } from "react-native";

function Store({ route, navigation }) {
  const { name, distance } = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default Store;
