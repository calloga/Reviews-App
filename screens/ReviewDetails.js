import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  return (
    <View styles={globalStyles.container}>
      <Text styles={globalStyles.titleText}>{route.params.title}</Text>
      <Text styles={globalStyles.rating}>{route.params.rating}</Text>
      <Text styles={globalStyles.paragraph}>{route.params.body}</Text>
    </View>
  );
}
