import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Center, VStack, Box, ScrollView, Flex, Heading } from "native-base";

export default function FlexRow() {
  return (
    <Box flex="1" safeAreaTop>
      <ScrollView>
        <VStack space={2.5} w="100%" px="3">
          <Box alignContent="center">
            <Heading size="md">Row</Heading>
          </Box>
          <Flex direction="column-reverse">
            <Center size="16" bg="primary.100" />
            <Center size="16" bg="primary.200" />
            <Center size="16" bg="primary.300" />
            <Center size="16" bg="primary.400" />
          </Flex>
        </VStack>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({});
