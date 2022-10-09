import React from "react";
import { Text } from "native-base";
import {
  Platform,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { NativeBaseProvider } from "native-base";
import WelcomeScreen from "./components/WelcomeScreen";
import Sample from "./components/Sample";
import FlexDirectionBasics from "./components/FlexDirectionBasics";
import Container1 from "./components/Container";
import Example from "./components/Example";
import ReactNativeVstack from "./components/ReactNativeVstack";
import FlexRow from "./components/FlexRow";
import Categories from "./components/Categories";
import Carousel from "./components/Carousel";

// const handlePress = () => {
//   console.log("Pressed");
// };

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <ReactNativeVstack /> */}
      {/* <Carousel /> */}
      <Text>Hemanth</Text>
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: Platform.OS == "android" ? 30 : 0,
//     backgroundColor: "#fff",
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     flexWrap: "wrap",
//   },
// });
