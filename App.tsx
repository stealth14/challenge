import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Stores from "./screens/Stores";
import Store from "./screens/Store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tiendas y estaciones" component={Stores} />
        <Stack.Screen name="Tienda" component={Store} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
