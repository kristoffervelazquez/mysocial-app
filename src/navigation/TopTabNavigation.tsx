import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Text, View, Image, StyleSheet } from "react-native";

const TopTabNavigation = () => {
  const TopTab = createMaterialTopTabNavigator();
  const user = {
    id: "1234567890",
    username: "Kristoffer Velazquez",
    profileImageUrl: "https://avatars.githubusercontent.com/u/55765715?v=4",
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={{ uri: user.profileImageUrl }}
          style={styles.image}
        />
        <Text style={styles.username}>{user.username}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TopTab.Navigator>
          <TopTab.Screen name="Gallery" component={HomeScreen} />
          <TopTab.Screen name="Socials" component={SettingsScreen} />
          <TopTab.Screen name="About me" component={SettingsScreen} />
        </TopTab.Navigator>
      </View>
    </View>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
  container: { flexDirection: "column", flex: 1 },
  topContainer: { flex: 2, justifyContent: "center", alignItems: "center" },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "blue",
    marginBottom: 10,
  },
  username: { fontSize: 20, marginLeft: 10 },
  bottomContainer: { flex: 3 },
});
