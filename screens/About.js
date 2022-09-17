import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
