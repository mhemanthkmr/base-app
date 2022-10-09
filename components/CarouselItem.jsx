import React from "react";
import { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  Platform,
  Text,
  Pressable,
  SafeAreaView,
  Dimensions,
} from "react-native";
import styles from "./styles";
const { width: screenWidth } = Dimensions.get("window");
function CarouselItem({ item, index }, parallaxProps) {
  return (
    <Pressable onPress={() => alert("Image description:" + item.description)}>
      <SafeAreaView style={styles.item}>
        <ParallaxImage
          source={{ uri: item.source }} /* the source of the image */
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...parallaxProps} /* pass in the necessary props */
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </SafeAreaView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
  },
  item: {
    width: "100%",
    height: screenWidth - 20, //height will be 20 units less than screen width.
  },
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "lightblue",
    marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
  dotContainer: {
    backgroundColor: "rgb(230,0,0)",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
  },
  inactiveDotStyle: {
    backgroundColor: "rgb(255,230,230)",
  },
});

export default CarouselItem;
