import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { User } from "../shared/interfaces";
import ImageView from "react-native-image-viewing";
import useAuthStore from "../store/useAuthStore";
import { useRoute } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAvatar } from "../api/cloud/media";
import * as ImagePicker from "expo-image-picker";
import MyLoader from "./MyLoader";


interface Props {
  user: User;
}

const UserProfileHeader = (props: Props) => {
  const [visible, setIsVisible] = React.useState(false);
  const { avatar, username, name, lastName } = props.user;
  const { loggedUser } = useAuthStore();
  const route = useRoute();
  const [loading, setLoading] = React.useState(false);
  const isPublicProfile = route.name === "PublicProfileScreen";
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["user", loggedUser?.username],
    mutationFn: editAvatar,
    retry: 0,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["user", loggedUser?.username],
      });
      Alert.alert("Success", "Profile picture updated successfully");
      setLoading(false);
    },
    onError: (error: IError) => {
      console.log(error);
      Alert.alert("Error", "There was an error, please try again later");
      setLoading(false);
    },
    onMutate: () => {
      setLoading(true);
    },
  });

  const pickImage = async () => {
    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true,
    });

    if (!canceled) {
      setLoading(true);
      await mutation.mutateAsync({
        file: assets[0].base64 as string,
        token: loggedUser?.token!,
      });
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <MyLoader visible={loading} />
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={() => setIsVisible(true)}
        onLongPress={isPublicProfile ?  () => {} : pickImage}
      >
        <Image
          source={{
            uri: avatar ? avatar : "https://i.stack.imgur.com/34AD2.jpg",
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <Text style={styles.username}>
        {name} {lastName}
      </Text>
      <Text style={styles.username}>@{username}</Text>
      <View>
        <ImageView
          images={[{ uri: avatar }]}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
      </View>
    </View>
  );
};

export default UserProfileHeader;

const styles = StyleSheet.create({
  container: { height: 330, justifyContent: "center", alignItems: "center" },
  username: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    // left: 110,
    // bottom: 50,
  },
  avatarContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "blue",
    marginBottom: 10,
    // bottom: -50,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  banner: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
});
