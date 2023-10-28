import { StyleSheet, View } from "react-native";
import React from "react";
import SocialsFlatList from "../../components/SocialsFlatList";
import { User } from "../../shared/interfaces";
import MyFAB from "../../components/MyFab";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Props {
  user: User;
}

const SocialsTab = ({ user }: Props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const isPublicProfile = route.name === "PublicProfileScreen";

  const handleFABPress = () => {
    navigation.navigate("EditSocialScreen" as never);
  };
  return (
    <View style={{ flex: 1 }}>
      <SocialsFlatList data={user.socials} />
      {!isPublicProfile && (
        <View style={{ position: "absolute", bottom: 0, right: 10 }}>
          <MyFAB onPress={handleFABPress} />
        </View>
      )}
    </View>
  );
};

export default SocialsTab;

const styles = StyleSheet.create({});
