import {
  Alert,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Social } from "../shared/interfaces";
import { Picker } from "@react-native-picker/picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import SocialIcon from "../components/SocialIcon";

type Props = NativeStackScreenProps<any, "EditSocialScreen">;

const EditSocialScreen = ({ navigation, route }: Props) => {
  const social: Social | null = (route.params as { social: Social })?.social;

  const [selectedSocial, setSelectedSocial] = useState(
    social?.type._id || "64f99738f21565f0a5f67a0c"
  );
  const [url, setUrl] = useState(social?.url || "");
  const [description, setDescription] = useState(social?.description || "");
  useEffect(() => {
    navigation.setOptions({
      title: social?.type.name || "Add new Social",
      headerTitleAlign: "center",
    } as any);
  }, []);

  const handleSave = () => {
    if (!url.trim() || !description.trim()) {
      return Alert.alert("Please fill all the fields");
    }

    if (social) {
      // Editar
      // ...
    } else {
      // Crear
      // ...
    }
    Alert.alert("Saved!");
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete Social",
      "This action cannot be undone. Are you sure you want to delete this social network?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"), // Do nothing
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>
        {data.find((item) => item._id === selectedSocial)?.name}
      </Text>
      <SocialIcon
        name={data.find((item) => item._id === selectedSocial)?.name as string}
        size={40}
        style={{ alignSelf: "center" }}
      />

      <View style={styles.formContainer}>
        <View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>URL:</Text>

            <TextInput
              placeholder="URL"
              style={styles.input}
              keyboardType="url"
              textContentType="URL"
              value={url}
              onChangeText={setUrl}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Description:</Text>
            <TextInput
              multiline
              placeholder="Description"
              style={styles.input}
              value={description}
              onChangeText={setDescription}
            />
          </View>
        </View>
        <View>
          <Text style={{ textAlign: "center", fontWeight: "500" }}>
            Choose a social network
          </Text>
          <Picker
            selectedValue={selectedSocial}
            onValueChange={(itemValue) => setSelectedSocial(itemValue)}
          >
            {data.map((item) => {
              return (
                <Picker.Item
                  key={item._id}
                  label={item.name}
                  value={item._id}
                />
              );
            })}
          </Picker>
        </View>
        <View style={styles.inputContaier}>
          {social && (
            <Button title="Delete" onPress={handleDelete} color={"red"} />
          )}
          <Button title="Save" onPress={handleSave} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditSocialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingVertical: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  formContainer: {
    // backgroundColor: "red",
    flex: 1,
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    // backgroundColor: "transparent",
    // borderRadius: 10,
    // borderWidth: 1,
    marginBottom: 10,
    // paddingHorizontal: 10,
    textAlign: "center",
  },
  inputContaier: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  fieldContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const data = [
  {
    _id: "64f99738f21565f0a5f67a0c",
    name: "Instagram",
    url: "https://www.instagram.com",
    description: "Meta app",
    __v: 0,
  },
  {
    _id: "64f99791f21565f0a5f67a10",
    name: "Spotify",
    url: "https://www.spotify.com",
    description: "Music app",
    __v: 0,
  },
  {
    _id: "64f997acf21565f0a5f67a12",
    name: "TikTok",
    url: "https://www.tiktok.com",
    description: "Videos app",
    __v: 0,
  },
  {
    _id: "64f997bef21565f0a5f67a14",
    name: "YouTube",
    url: "https://www.youtube.com",
    description: "Videos app",
    __v: 0,
  },
  {
    _id: "64f997e7f21565f0a5f67a16",
    name: "Twitter (X)",
    url: "https://www.x.com",
    description: "Twitter app",
    __v: 0,
  },
  {
    _id: "64f99801f21565f0a5f67a18",
    name: "Facebook",
    url: "https://www.facebook.com",
    description: "Meta App",
    __v: 0,
  },
  {
    _id: "64f99875f21565f0a5f67a1a",
    name: "Telegram",
    url: "https://web.telegram.org",
    description: "Meta App",
    __v: 0,
  },
  {
    _id: "64f99899f21565f0a5f67a1c",
    name: "Discord",
    url: "https://discord.com",
    description: "Meta App",
    __v: 0,
  },
];
