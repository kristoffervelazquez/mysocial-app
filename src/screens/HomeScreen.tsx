import { StyleSheet, View } from "react-native";
import React from "react";
import TopTabNavigation from "../navigation/TopTabNavigation";

const HomeScreen = () => {
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
