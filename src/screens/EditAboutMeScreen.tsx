import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any, "EditAboutMeScreen">;

const EditAboutMeScreen = ({ navigation, route }: Props) => {
  const about = (route.params as { about: string })?.about;
  const [value, onChangeText] = React.useState(about || "");

  const handleSave = () => {
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
