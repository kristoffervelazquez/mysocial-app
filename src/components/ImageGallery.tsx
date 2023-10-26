import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import ImageView from "react-native-image-viewing";
import React, { useState } from "react";
import ImageFooter from "./ImageFooter";
import ImageHeader from "./ImageHeader";

interface IImage {
  imageUrl: string;
  _id: string;
  caption: string;
}
interface ImageGalleryProps {
  images: IImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [visible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [caption, setCaption] = useState("");
  const handlePress = (i: number) => {
    setIndex(i);
    setIsVisible(true);
  };
  return images.map((item, i) => {
    const { imageUrl, _id } = item;

    return (
      <View style={styles.imageContainer} key={_id}>
        <View>
          <TouchableOpacity onPress={() => handlePress(i)}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </TouchableOpacity>
          <View>
            <ImageView
              images={images.map((image) => ({ uri: image.imageUrl }))}
              imageIndex={index}
              keyExtractor={(_, index) => index.toString()}
              visible={visible}
              onRequestClose={() => setIsVisible(false)}
              animationType="fade"
              presentationStyle="overFullScreen"
              HeaderComponent={() => <ImageHeader caption={caption} />}
              FooterComponent={() => (
                <ImageFooter imageId={images[index].imageUrl} />
              )}
              onImageIndexChange={(i) => {
                setCaption(images[i].caption);
              }}
            />
          </View>
        </View>
      </View>
    );
  });
};

export default ImageGallery;

const styles = StyleSheet.create({
  imageContainer: {
    width: "33.2%",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  image: {
    aspectRatio: 1,
    paddingTop: "100%",
    // width: "100%",
    // height: 300,
  },
});
