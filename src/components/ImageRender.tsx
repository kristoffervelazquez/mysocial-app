import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

interface ItemRenderProps {
  item: {
    uri: string;
    id: string;
  };
  index: number;
  handlePress: (i: number) => void;
}

const ImageRender = ({ item, index, handlePress }: ItemRenderProps) => {

  return (
    <View style={styles.imageContainer}>
      <View>
        <TouchableOpacity onPress={() => handlePress(index)}>
          <Image style={styles.image} source={{ uri: item.uri }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageRender;

const styles = StyleSheet.create({
  imageContainer: {
    width: "33.1%",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  image: {
    // aspectRatio: 1,
    // paddingTop: "100%",
    width: "100%",
    height: 300,
  },
});
