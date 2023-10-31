import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import TopTabNavigation from "../navigation/TopTabNavigation";
import * as Notifications from "expo-notifications";
import useAuthStore from "../store/useAuthStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type StackScreenProps = NativeStackScreenProps<any, "HomeScreen">;

const HomeScreen = ({ navigation }: StackScreenProps) => {
  // Pedir permisos para notificaciones
  useEffect(() => {
    (async () => {
      await Notifications.requestPermissionsAsync();
    })();
  }, []);

  const { loggedUser } = useAuthStore();
  return (
    <View style={styles.container}>
      <TopTabNavigation username={loggedUser?.username!} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
