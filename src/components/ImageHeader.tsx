import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  caption: string;
}

const ImageHeader = ({ caption }: Props) => {
  return (
    <View
      style={{
        padding: 50,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>{caption}</Text>
    </View>
  );
};

export default ImageHeader;

const styles = StyleSheet.create({});
