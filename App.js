import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let fontsLoaded = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading onError={console.warn} />;
  } else {
    return <Home />;
  }
}
