import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";


const GalleryTab = () => {
  return (
    <View style={styles.container}>
      {images.map((item, i) => {
        const { imageUrl } = item;
        return (
          <TouchableOpacity style={styles.imageContainer} key={i}>
            <Image style={styles.image}  source={{ uri: imageUrl }} />
          </TouchableOpacity>
        );
      })}
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
  imageContainer: {
    width: '33%'
  },
  image: {
    aspectRatio: 1, // Mantiene la relación de aspecto de las imágenes
    paddingTop: "100%", // 1:1 aspect ratio
  },
});

const images = [
  {
    _id: "652baff053990dd5ccf14700",
    imageUrl:
      "https://res.cloudinary.com/dq473i7j4/image/upload/v1697361907/mysocial/x9epq1x8siz222wqj2sd.jpg",
    caption: "",
    createdAt: "2023-10-15T09:25:04.216Z",
  },
  {
    _id: "652da2d3d175359dae907693",
    imageUrl:
      "https://res.cloudinary.com/dq473i7j4/image/upload/v1697489618/mysocial/nyo7hxn0of595hqxkybg.jpg",
    caption: "",
    createdAt: "2023-10-16T20:53:39.229Z",
  },
  {
    _id: "652f1eb8df241a249adaa491",
    imageUrl:
      "https://res.cloudinary.com/dq473i7j4/image/upload/v1697586872/mysocial/tgtv0nsivnvp0ftzfqdn.jpg",
    caption: "",
    createdAt: "2023-10-17T23:54:32.506Z",
  },
  {
    _id: "652da2d3d175359dae907693",
    imageUrl:
      "https://res.cloudinary.com/dq473i7j4/image/upload/v1697489618/mysocial/nyo7hxn0of595hqxkybg.jpg",
    caption: "",
    createdAt: "2023-10-16T20:53:39.229Z",
  },
  {
    _id: "652f1eb8df241a249adaa491",
    imageUrl:
      "https://res.cloudinary.com/dq473i7j4/image/upload/v1697586872/mysocial/tgtv0nsivnvp0ftzfqdn.jpg",
    caption: "",
    createdAt: "2023-10-17T23:54:32.506Z",
  },
  
  {
    _id: "652baff053990dd5ccf14700",
    imageUrl:
      "https://res.cloudinary.com/dq473i7j4/image/upload/v1697361907/mysocial/x9epq1x8siz222wqj2sd.jpg",
    caption: "",
    createdAt: "2023-10-15T09:25:04.216Z",
  },
  
];
