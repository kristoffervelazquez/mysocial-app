import { Linking, StyleSheet } from "react-native";
import { FlatList } from "react-native-collapsible-tab-view";
import React from "react";
import SocialCard from "./SocialCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Social } from "../shared/interfaces";
import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

interface Props {
  data: Social[];
}

const SocialsFlatList = ({ data }: Props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const isPublicProfile = route.name === "PublicProfileScreen";

  const renderItem = ({ item }: any) => {
    return <SocialCard item={item} onPress={() => handleCardPress(item)} />;
  };

  const handleCardPress = (item: Social) => {
    // Maneja la acción cuando se toca una tarjeta
    if (isPublicProfile) {
      Linking.openURL(item.url);
    } else {
      // Navega a la pantalla de edición
      const pushAction = StackActions.push("EditSocialScreen", {
        social: item,
      });
      navigation.dispatch(pushAction);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </GestureHandlerRootView>
  );
};

export default SocialsFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
