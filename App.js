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

const handlePress = () => {
  console.log("Pressed");
};

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text onPress={handlePress}>Hello React</Text>
        <TouchableOpacity onPress={handlePress}>
          <Image
            fadeDuration={300}
            blurRadius={0}
            borderRadius={100}
            source={{
              width: 200,
              height: 200,
              uri: "https://picsum.photos/200/500",
            }}
          />
        </TouchableOpacity>
        {/* <TouchableNativeFeedback>
          <View
            style={{ width: "200", backgroundColor: "blue", height: "70" }}
          ></View>
        </TouchableNativeFeedback> */}
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
