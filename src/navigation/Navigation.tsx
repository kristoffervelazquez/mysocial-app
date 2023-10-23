import React from "react";
import TopTabNavigation from "./TopTabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Profile"
        component={TopTabNavigation}
        options={{
          headerRight: () => <AddButton />,
          headerTitle: "Profile",
          // headerLeft: () => <Button title="Menu" onPress={() => {}} />,
        }}
      />
    </Stack.Navigator>
  );
};

const AddButton = () => {
  return (
    <Button
      title="QR"
      onPress={() => {
        // Acciones del botón
      }}
    />
  );
};

export default Navigation;
