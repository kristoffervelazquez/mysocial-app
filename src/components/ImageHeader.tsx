import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ImageDropDownMenu from "./ImageDropDownMenu";

interface Props {
  id: string;
  caption: string;
}


const ImageHeader = ({ id, caption }: Props) => {
  return (
    <View
      style={{
        padding: 50,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {caption || "No caption"}
      </Text>
      {
        <View style={{ right: 10, position: "absolute" }}>
          <ImageDropDownMenu id={id} />
        </View>
      }
    </View>
  );
};

export default ImageHeader;

const styles = StyleSheet.create({});
