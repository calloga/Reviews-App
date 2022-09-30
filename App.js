import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";
import { globalStyles } from "./styles/global";
import Drawer from "./routes/Drawer";
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
    <View style={globalStyles.root} onLayout={onLayoutRootView}>
      <Drawer />
    </View>
  );
}
