import { StyleSheet, View } from "react-native";
import React from "react";
import ImageGallery from "../../components/ImageGallery";
import { Image, User } from "../../shared/interfaces";
import { UseQueryResult } from "@tanstack/react-query";

interface Props {
  images: Image[];
  query: UseQueryResult<User, Error>
}

const GalleryTab = ({images, query}: Props) => {
  return (
    <View style={styles.container}>
      <ImageGallery images={images} query={query} />
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
