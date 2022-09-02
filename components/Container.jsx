import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Center, Container, ScrollView, Text, VStack } from "native-base";

export default function Container1() {
  return (
    <Box>
      <ScrollView>
        <VStack>
          <Heading>Row</Heading>
        </VStack>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({});
