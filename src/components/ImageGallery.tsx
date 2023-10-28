import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import ImageView from "react-native-image-viewing";
import React, { useState } from "react";
import ImageFooter from "./ImageFooter";
import ImageHeader from "./ImageHeader";
import MyFAB from "./MyFab";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { useRoute } from "@react-navigation/native";

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
  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState("");
  const handlePress = (i: number) => {
    setIndex(i);
    setIsVisible(true);
  };
  const route = useRoute();
  const isPublicProfile = route.name === "PublicProfileScreen";

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!canceled) {
      setImage(assets[0].base64 as string);
      console.log(assets[0].base64);
    }
  };
  // const takePhoto = async () => {
  //   const getCameraPermissions = async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();

  //     if (status !== "granted") {
  //       // Los permisos no se concedieron, maneja el caso según tus necesidades
  //       console.log("Permisos de cámara no concedidos.");
  //     }
  //   };

  //   const { assets, canceled } = await ImagePicker.launchCameraAsync({
  //     quality: 1,

  //     cameraType: ImagePicker.CameraType.front,
  //   });

  //   if (!canceled) {
  //     setImage(assets[0].uri);
  //   }
  // };
  return (
    <>
      {images.map((item, i) => {
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
      })}
      {!isPublicProfile && (
        <View style={{ position: "absolute", top: 10, left: 10 }}>
          <MyFAB onPress={pickImage} />
        </View>
      )}
    </>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  imageContainer: {
    width: "33.2%",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  image: {
    // aspectRatio: 1,
    // paddingTop: "100%",
    width: "100%",
    height: 300,
  },
});
