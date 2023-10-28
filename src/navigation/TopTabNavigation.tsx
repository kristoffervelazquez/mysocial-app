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
    _id: "651be9aaf326e7934bae1bcc",
    name: "Kristoffer",
    lastName: "Velazquez",
    email: "kristoffervelazquez01@gmail.com",
    username: "kingg",
    avatar:
      "https://res.cloudinary.com/dq473i7j4/image/upload/v1697529445/mysocial/fq8w0mw7ozf5d6eqrrtb.jpg",
    confirmed: true,
    banner:
      "https://res.cloudinary.com/dq473i7j4/image/upload/v1697566859/mysocial/miihkn32wymlvilwraqx.jpg",
    about: "Hola mi nombre es Kristoffer c:",
    images: [
      {
        _id: "652baff053990dd5ccf14700",
        imageUrl:
          "https://res.cloudinary.com/dq473i7j4/image/upload/v1697361907/mysocial/x9epq1x8siz222wqj2sd.jpg",
        caption: "Hola",
        createdAt: "2023-10-15T09:25:04.216Z",
      },
      {
        _id: "652da2d3d175359dae907693",
        imageUrl:
          "https://res.cloudinary.com/dq473i7j4/image/upload/v1697489618/mysocial/nyo7hxn0of595hqxkybg.jpg",
        caption: "Hola",
        createdAt: "2023-10-16T20:53:39.229Z",
      },
      {
        _id: "652f1eb8df241a249adaa491",
        imageUrl:
          "https://res.cloudinary.com/dq473i7j4/image/upload/v1697586872/mysocial/tgtv0nsivnvp0ftzfqdn.jpg",
        caption: "Hola",
        createdAt: "2023-10-17T23:54:32.506Z",
      },
    ],
    socials: [
      {
        _id: "651ecdb07a4a595977f5fe6a",
        type: {
          _id: "64f99738f21565f0a5f67a0c",
          name: "Instagram",
        },
        url: "https://www.instagram.com/_liltrashking/",
        user: "651be9aaf326e7934bae1bcc",
        description: "mi insta pa!",
        createdAt: "2023-10-05T14:52:32.242Z",
        updatedAt: "2023-10-17T08:24:25.425Z",
        __v: 0,
      },
      {
        _id: "651f01a93b6ce44904f2f5f2",
        type: {
          _id: "64f997e7f21565f0a5f67a16",
          name: "Twitter (X)",
        },
        url: "https://www.x.com/liltrashking",
        user: "651be9aaf326e7934bae1bcc",
        description: "mi twitter",
        createdAt: "2023-10-05T18:34:17.770Z",
        updatedAt: "2023-10-09T09:34:44.102Z",
        __v: 0,
      },
      {
        _id: "652e4506344cc55720b10a08",
        type: {
          _id: "64f99801f21565f0a5f67a18",
          name: "Facebook",
        },
        url: "https://www.facebook.com/kristoffer.velazquez/",
        user: "651be9aaf326e7934bae1bcc",
        description: "mi feis",
        createdAt: "2023-10-17T08:25:42.699Z",
        updatedAt: "2023-10-17T08:25:42.699Z",
        __v: 0,
      },
    ],
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
            <SocialsTab user={user} />
          </SafeAreaView>
        </Tabs.Tab>
        <Tabs.Tab name="About me">
          <Tabs.ScrollView style={styles.container}>
            <AboutMeTab about={user.about} />
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
