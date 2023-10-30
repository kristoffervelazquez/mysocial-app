import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import TopTabNavigation from "../navigation/TopTabNavigation";
import * as Notifications from "expo-notifications";
import useAuthStore from "../store/useAuthStore";

const HomeScreen = () => {
  // Pedir permisos para notificaciones
  useEffect(() => {
    (async () => {
      await Notifications.requestPermissionsAsync();
    })();
  }, []);

  const {user_id} = useAuthStore();

  return (
    <View style={styles.container}>
      <TopTabNavigation username={'hanna03'} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
