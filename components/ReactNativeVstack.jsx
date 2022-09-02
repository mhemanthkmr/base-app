import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Sample from "./Sample";
import {
  Box,
  Flex,
  Heading,
  ScrollView,
  VStack,
  Center,
  Spacer,
} from "native-base";

export default function ReactNativeVstack() {
  const onButton = (params) => {
    console.log("Hello World");
  };

  return (
    <Box flex="1" safeAreaTop>
      {/* <ScrollView> */}
      <VStack w="100%">
        <Heading>Hello</Heading>
        <Flex h={40} alignItems="center" direction="column">
          {/* <Center size="16" bg="primary.500" rounded="lg" />
            <Spacer />
            <Center size="16" bg="secondary.400" /> */}
          <Sample name="Button 1" onClick={onButton} />
          <Sample name="Button 2" />
          <Sample name="Button 3" />
          <Sample name="Button 4" />
          <Sample name="Button 5" />
          <Sample name="Button 6" />
          <Sample name="Button 7" />
          <Sample name="Button 8" />
          <Sample name="Button 9" />
        </Flex>
      </VStack>
      {/* </ScrollView> */}
    </Box>
  );
}

const styles = StyleSheet.create({});
