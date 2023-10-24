import React from "react";
import TopTabNavigation from "./TopTabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, TouchableOpacity } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import SettingsScreen from "../screens/SettingsScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} >
      <Stack.Screen
        name="Profile"
        component={TopTabNavigation}
        options={{
          headerRight: () => <QrButton />,
          headerTitle: "My Social",
          headerTitleAlign: "center",
          headerLeft: () => <SettingsButton />,
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const QrButton = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Icon name="qr-code-outline" size={30} color={'blue'}/>
    </TouchableOpacity>
  );
};

const SettingsButton = () => {
  const navigation = useNavigation();

  const pushAction = StackActions.push("Settings");
  return (
    <TouchableOpacity onPress={() => navigation.dispatch(pushAction)}>
      <Icon name="settings-outline" size={30} color={'blue'}/>
    </TouchableOpacity>
  );
};

export default Navigation;
