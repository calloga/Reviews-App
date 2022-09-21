import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

import { globalStyles } from "./styles/global";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat/Montserrat.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("Fonts loaded");
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("Fonts loading");
    return null;
  }

  return (
    <View style={globalStyles.container} onLayout={onLayoutRootView}>
      <Home />
    </View>
  );
}
