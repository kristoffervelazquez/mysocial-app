import { StyleSheet } from "react-native";
import { FlatList } from "react-native-collapsible-tab-view";
import React from "react";
import SocialCard from "./SocialCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  data: any[];
}

const SocialsFlatList = ({ data }: Props) => {
  const renderItem = ({ item }: any) => {
    return <SocialCard item={item} onPress={() => handleCardPress(item)} />;
  };

  const handleCardPress = (item: any) => {
    // Maneja la acción cuando se toca una tarjeta
    console.log("Card presionada: ", item.title);
  };

  return (
    <GestureHandlerRootView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </GestureHandlerRootView>
  );
};

export default SocialsFlatList;

const styles = StyleSheet.create({});
