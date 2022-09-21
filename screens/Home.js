import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Hi</Text>
    </View>
  );
}
