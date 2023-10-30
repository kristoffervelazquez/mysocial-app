import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";

interface RouteParams extends RouteProp<ParamListBase> {
  params: {
    data?: string[];
  };
}

const QrScreen = () => {
  const route = useRoute<RouteParams>();
  // const data = route.params.data;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fmy-social-v1.netlify.app%2Fkingg",
        }}
      />
    </View>
  );
};

export default QrScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    marginBottom: 20
  },
});
