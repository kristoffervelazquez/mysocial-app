import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import TopTabNavigation from "../navigation/TopTabNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getUserAndParamsFromUrl } from "../helpers/getUserAndParamsFromUrl";
import { User } from "../shared/interfaces";

type ProfileProps = NativeStackScreenProps<any, "PublicProfileScreen">;

const PublicProfileScreen = ({ navigation, route }: ProfileProps) => {
  const { params } = route;
  const { query, username } = getUserAndParamsFromUrl(params?.link);
  const { socials } = query as { socials: string[] };
  useEffect(() => {
    navigation.setOptions({
      title: username,
      headerTitleAlign: "center",
    } as any);
  }, []);

  return (
    <View style={styles.container}>
      <TopTabNavigation username={username} query={socials} />
    </View>
  );
};

export default PublicProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
