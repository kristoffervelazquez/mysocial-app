import { Alert, StyleSheet, View } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "../store/useAuthStore";
import { deleteImage } from "../api/cloud/media";
import MyLoader from "./MyLoader";

const privateButtons = ["Delete"];
const publicButtons = ["Report"];

interface Props {
  id: string;
}
const ImageDropDownMenu = ({ id }: Props) => {
  const { loggedUser } = useAuthStore();
  const route = useRoute();
  const [loading, setLoading] = React.useState(false);
  const isPublicProfile = route.name === "PublicProfileScreen";
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["user", loggedUser?.username],
    mutationFn: deleteImage,
    retry: 0,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["user", loggedUser?.username],
      });
      Alert.alert("Success", "Image deleted successfully");
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

  const handleDeleteImage = async () => {
    Alert.alert("Delete Image", "Are you sure you want to delete this image?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () =>
          await mutation.mutateAsync({
            id,
            token: loggedUser?.token as string,
          }),
      },
    ]);
  };
  return (
    <View>
      <MyLoader visible={loading} />
      <SelectDropdown
        data={isPublicProfile ? publicButtons : privateButtons}
        onSelect={(selectedItem) => {
          switch (selectedItem) {
            case "Delete":
              handleDeleteImage();
              break;
            case "Report":
              console.log("Report ", id);
              break;
            default:
              break;
          }
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return "";
        }}
        defaultButtonText={"Select country"}
        buttonStyle={{
          backgroundColor: "transparent",
          width: 70,
          height: 40,
          borderRadius: 10,
        }}
        renderDropdownIcon={() => {
          return (
            <Icon
              name="ellipsis-vertical"
              size={20}
              color="white"
              style={{ marginRight: 10, alignContent: "center" }}
            />
          );
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={{
          backgroundColor: "#fafafa",
          width: 75,
        }}
        rowStyle={{
          backgroundColor: "#ffffff",
          borderBottomColor: "#fafafa",
        }}
      />
    </View>
  );
};

export default ImageDropDownMenu;

const styles = StyleSheet.create({});
