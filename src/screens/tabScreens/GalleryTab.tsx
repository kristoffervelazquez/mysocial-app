import { StyleSheet, View } from "react-native";
import React from "react";
import ImageGallery from "../../components/ImageGallery";
import { Image } from "../../shared/interfaces";

interface Props {
  images: Image[];
}

const GalleryTab = ({images}: Props) => {
  return (
    <View style={styles.container}>
      <ImageGallery images={images} />
    </View>
  );
};

export default GalleryTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 2,
  },
});
