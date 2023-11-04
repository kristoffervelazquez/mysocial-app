import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { editUserData } from "../api/cloud/user";
import useAuthStore from "../store/useAuthStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import MyLoader from "../components/MyLoader";

type Props = NativeStackScreenProps<any, "EditAboutMeScreen">;

const EditAboutMeScreen = ({ navigation, route }: Props) => {
  const about = (route.params as { about: string })?.about;
  const [value, onChangeText] = useState(about || "");
  const [loading, setLoading] = useState(false);

  const { loggedUser } = useAuthStore();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationKey: ["aboutMe", loggedUser?.username],
    mutationFn: () => {
      return editUserData({ about: value }, loggedUser?.token as string);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["user", loggedUser?.username],
      });
      Alert.alert("Success", "About me updated successfully");
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

  const handleSave = async () => {
    await mutate.mutateAsync();
    navigation.goBack();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          onChangeText={onChangeText}
          multiline={true}
          numberOfLines={4}
          style={{
            height: 200,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
          }}
          value={value}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={handleSave} color={"red"} />
          <Button title="Save" onPress={handleSave} />
        </View>
        <MyLoader visible={loading} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditAboutMeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-around",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
