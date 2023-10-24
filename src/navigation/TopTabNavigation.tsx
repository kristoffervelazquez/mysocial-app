import React from "react";
import { View, StyleSheet } from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";
import GalleryTab from "../screens/tabScreens/GalleryTab";
import UserProfileHeader from "../components/UserProfileHeader";
import { User } from "../shared/interfaces";
import SocialsTab from "../screens/tabScreens/SocialsTab";
import AboutMeTab from "../screens/tabScreens/AboutMeTab";


const TopTabNavigation = () => {
  const user: User = {
    id: 1234567890,
    name: "Kristoffer Velazquez",
    username: "krissking",
    avatar: "https://avatars.githubusercontent.com/u/55765715?v=4",
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
          <Tabs.ScrollView>
            <SocialsTab />
          </Tabs.ScrollView>
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
