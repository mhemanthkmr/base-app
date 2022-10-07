import React from "react";
import { View, Text, Image, ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
    backgroundColor: "#dbdbdb",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    backgroundColor: "#dbdbdb",
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
    backgroundColor: "#dbdbdb",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
    backgroundColor: "#dbdbdb",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
    backgroundColor: "#dbdbdb",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
    backgroundColor: "#dbdbdb",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Deserts",
    backgroundColor: "#dbdbdb",
  },
];
export default function Catogeries() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.scrollbar}>
            <View
              width="10"
              height="10"
              alignItems="center"
              justifyContent="center"
              borderRadius="3xl"
              backgroundColor={item.backgroundColor}
              style={[styles.icons, { backgroundColor: item.backgroundColor }]}
            >
              {/* For FastImage */}

              {/* <FastImage
                source={items[index].image}
                style={styles.image}
                alt={items[index].text}
              /> */}
              {/* For Native Base */}
              <Image
                width="7"
                height="7"
                source={items[index].image}
                // style={styles.image}
                alt={items[index].text}
              />
            </View>
            <Text fontWeight="semibold" fontSize="xs">
              {items[index].text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  scrollbar: {
    alignItems: "center",
    marginRight: 20,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    justifyContent: "center",
  },
});
