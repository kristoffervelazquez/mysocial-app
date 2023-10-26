import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";



const HeaderRegisterAnimation = () => {
  return (
    <View style={styles.container}>
      {/* <Text>HeaderAnimation</Text> */}
      <LottieView
        source={require("../../../../assets/cat_hi.json")} // Ruta al archivo JSON de la animación
        autoPlay={true} // Iniciar animación automáticamente
        speed={1}
        loop={true}
        style={styles.animatedBackground}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  animatedBackground: {
    width: "100%",
    height: "100%",
  },
});

export default HeaderRegisterAnimation;
