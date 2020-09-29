import React from "react";
import { View, Text, StyleSheet } from "react-native";

function User({ user }) {
  return (
    <View style={styles.container}>
      <Text>{user.login}</Text>
      <Text>{user.balance}</Text>
    </View>
  );
}
export default User;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 2,
    borderRadius: 8,
  },
});
