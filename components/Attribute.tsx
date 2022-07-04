import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface AttributeProps {
  label: string;
  icon: string;
}

export default function Attribute(props: AttributeProps) {
  const { label, icon } = props;
  return (
    <View style={styles.container}>
      <FontAwesome5 name={icon} size={20} color="#3B4650" />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
  },

  label: { marginLeft: 5 },
});
