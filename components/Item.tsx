import { View, Text, StyleSheet } from "react-native";

interface ItemProps {
  label: string;
  value: string;
}

export default function Item(props: ItemProps) {
  const { label, value } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  label: { color: "gray" },
  value: { marginTop: 10, color: "black", fontWeight: "bold" },
});
