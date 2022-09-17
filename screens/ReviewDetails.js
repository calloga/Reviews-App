import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function ReviewDetails() {
  return (
    <View styles={styles.container}>
      <Text>ReviewDetails</Text>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
