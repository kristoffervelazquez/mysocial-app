import { StyleSheet } from "react-native";
import React from "react";
import AnimatedLoader from "react-native-animated-loader";

interface MyLoaderProps {
  visible: boolean;
}
const MyLoader = ({ visible }: MyLoaderProps) => {
  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../../assets/cat-loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    ></AnimatedLoader>
  );
};

export default MyLoader;

const styles = StyleSheet.create({
  lottie: {
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
