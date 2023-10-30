import { StyleSheet, Text, View, } from "react-native";
import ImageView from "react-native-image-viewing";
import React, { useState } from "react";
import ImageFooter from "./ImageFooter";
import ImageHeader from "./ImageHeader";
import MyFAB from "./MyFab";
import * as ImagePicker from "expo-image-picker";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-collapsible-tab-view";
import ImageRender from "./ImageRender";

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
  const [items, setItems] = useState(
    images.map((image) => {
      return { uri: image.imageUrl, id: image._id };
    })
  );
  const handlePress = (i: number) => {
    setIndex(i);
    setIsVisible(true);
  };
  const route = useRoute();
  const isPublicProfile = route.name === "PublicProfileScreen";

  const pickImage = async () => {
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
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item, index }) => (
          <ImageRender item={item} index={index} handlePress={handlePress} />
        )}
        ListEmptyComponent={() => <Text>No images</Text>}
        onRefresh={() => console.log("refreshing")}
        refreshing={false}
      />
      {images.length > 0 && (
        <ImageView
          images={items}
          imageIndex={index}
          keyExtractor={(_, index) => items[index].id}
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
      )}
      {!isPublicProfile && (
        <View style={styles.fab}>
          <MyFAB onPress={pickImage} />
        </View>
      )}
    </View>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
