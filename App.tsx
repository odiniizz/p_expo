import { StyleSheet } from "react-native";
import { Slide1 } from "./src/screens/Slide1";
import { Slide2 } from "./src/screens/Slide2";
import { Slide3 } from "./src/screens/Slide3";
import { Slide4 } from "./src/screens/Slide4";
import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';

export default function App (){

  const [fontsLoaded] = useFonts({
    Itim_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Slide1/>
  );
}