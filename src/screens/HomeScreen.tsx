import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import TopTabNavigation from "../navigation/TopTabNavigation";
import * as Notifications from "expo-notifications";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


const HomeScreen = () => {
  // Pedir permisos para notificaciones
  useEffect(() => {
    (async () => {
      await Notifications.requestPermissionsAsync();
    })();
  }, []);


  return (
    <View style={styles.container}>
      <TopTabNavigation />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
