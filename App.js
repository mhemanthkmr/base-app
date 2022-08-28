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

// const handlePress = () => {
//   console.log("Pressed");
// };

export default function App() {
  return (
    <NativeBaseProvider>
      <WelcomeScreen />
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
