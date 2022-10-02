import { View, Text, Image } from "react-native";
import React from "react";
import { images, globalStyles } from "../styles/global";
import Card from "../shared/Card";

export default function ReviewDetails({ route, navigation }) {
  return (
    <Card>
      <View styles={globalStyles.container}>
        <Text styles={globalStyles.titleText}>{route.params.title}</Text>
        <Text styles={globalStyles.paragraph}>{route.params.body}</Text>
        <View style={globalStyles.rating}>
          <Text>Gamezone Rating</Text>
          <Image source={images.ratings[route.params.rating]} />
        </View>
      </View>
    </Card>
  );
}
