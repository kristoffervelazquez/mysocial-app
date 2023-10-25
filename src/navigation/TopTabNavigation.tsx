import React from "react";
import { View, StyleSheet } from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";
import GalleryTab from "../screens/tabScreens/GalleryTab";
import UserProfileHeader from "../components/UserProfileHeader";
import { User } from "../shared/interfaces";
import SocialsTab from "../screens/tabScreens/SocialsTab";
import AboutMeTab from "../screens/tabScreens/AboutMeTab";
import { SafeAreaView } from "react-native";

const TopTabNavigation = () => {
  const user: User = {
    id: 1234567890,
    name: "Kristoffer Velazquez",
    username: "krissking",
    avatar:
      "https://res.cloudinary.com/dq473i7j4/image/upload/v1697489618/mysocial/nyo7hxn0of595hqxkybg.jpg",
    banner: "https://picsum.photos/2000/200",
  };

  return (
    <View style={styles.container}>
      <Tabs.Container renderHeader={() => <UserProfileHeader user={user} />}>
        <Tabs.Tab name="Gallery">
          <Tabs.ScrollView>
            <GalleryTab />
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Socials">
          <SafeAreaView style={styles.container}>
            <SocialsTab />
          </SafeAreaView>
        </Tabs.Tab>
        <Tabs.Tab name="About me">
          <Tabs.ScrollView>
            <AboutMeTab />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
