import { StyleSheet, View } from "react-native";
import React from "react";
import SocialsFlatList from "../../components/SocialsFlatList";

const SocialsTab = () => {
  return (
    <View style={{flex: 1}}>
      <SocialsFlatList data={data} />
    </View>
  );
};

export default SocialsTab;

const styles = StyleSheet.create({});

const data = [
  {
    id: "1",
    icon: "https://picsum.photos/200/300",
    title: "Título 1",
    text: "Texto 1",
  },
  {
    id: "2",
    icon: "https://picsum.photos/200/300",
    title: "Título 2",
    text: "Texto 2",
  },
  {
    id: "4",
    icon: "https://picsum.photos/200/300",
    title: "Título 2",
    text: "Texto 2",
  },
  {
    id: "5",
    icon: "https://picsum.photos/200/300",
    title: "Título 2",
    text: "Texto 2",
  },
  // Agrega más datos según sea necesario
];
