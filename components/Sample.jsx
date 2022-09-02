import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Center, Divider, VStack } from "native-base";
import { TouchableOpacity } from "react-native-web";

export default function Sample({ name, onButton }) {
  return (
    <Box>
      <TouchableOpacity>
        <Box
          bg="primary.500"
          m="5"
          p="2"
          _text={{
            fontWeight: "bold",
            color: "warmGray.50",
            letterSpacing: "sm",
            fontSize: "lg",
          }}
          shadow={2}
          onButton={() => {
            console.log("Button Clicked");
          }}
        >
          {name}
        </Box>
        <Divider />
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({});
