import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
