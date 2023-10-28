import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import MyFAB from "../../components/MyFab";

interface Props {
  about: string;
}

const AboutMeTab = ({ about }: Props) => {
  const route = useRoute();
  const naigation = useNavigation();
  const isPublicProfile = route.name === "PublicProfileScreen";

  const handlePress = () => {
    const pushAction = StackActions.push("EditAboutMeScreen", {
      about: about || "",
    });
    naigation.dispatch(pushAction);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About me</Text>
      <View style={styles.separator} />
      <Text style={styles.descripton}>{about}</Text>

      {!isPublicProfile && (
        <View style={{ position: "absolute", top: 10, right: 10 }}>
          <MyFAB
            icon="brush-outline"
            onPress={handlePress}
          />
        </View>
      )}
    </View>
  );
};

export default AboutMeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  descripton: {
    fontSize: 15,
    textAlign: "center",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
    backgroundColor: "blue",
    alignSelf: "center",
  },
});
