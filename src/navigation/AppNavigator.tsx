import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const AppNavigator = () => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
