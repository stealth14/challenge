import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContext } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = React.useContext(NavigationContext);

  const onSubmit = () => {
    navigation.navigate("Tiendas y estaciones");
  };

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
