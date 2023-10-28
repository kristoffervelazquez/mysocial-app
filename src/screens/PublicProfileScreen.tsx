import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import TopTabNavigation from "../navigation/TopTabNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getUserAndParamsFromUrl } from "../helpers/getUserAndParamsFromUrl";

type ProfileProps = NativeStackScreenProps<any, "PublicProfileScreen">;

const PublicProfileScreen = ({ navigation, route }: ProfileProps) => {
  const { params } = route;
  const { query, username } = getUserAndParamsFromUrl(params?.link);
  useEffect(() => {
    navigation.setOptions({
      title: username,
      headerTitleAlign: "center",
    } as any);
  });
  return (
    <View style={styles.container}>
      <TopTabNavigation />
    </View>
  );
};

export default PublicProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
