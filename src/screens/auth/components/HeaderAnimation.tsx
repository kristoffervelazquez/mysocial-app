import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const HeaderAnimation = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../../../assets/people.json")} // Ruta al archivo JSON de la animación
        autoPlay={true} // Iniciar animación automáticamente
        loop={true}
        speed={0.5}
        style={styles.animatedBackground}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedBackground: {
    width: "100%",
    height: "100%",
  },
});

export default HeaderAnimation;
