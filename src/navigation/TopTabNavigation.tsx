import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";
import GalleryTab from "../screens/tabScreens/GalleryTab";
import UserProfileHeader from "../components/UserProfileHeader";
import SocialsTab from "../screens/tabScreens/SocialsTab";
import AboutMeTab from "../screens/tabScreens/AboutMeTab";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../api/cloud/user";
import MyLoader from "../components/MyLoader";

interface Props {
  username: string;
  query?: string[];
}

const TopTabNavigation = ({ username, query }: Props) => {
  const userQuery = useQuery({
    queryKey: ["user", username, query],
    queryFn: () => {
      if (query) {
        return getUserData(username, query);
      }
      return getUserData(username);
    },
    staleTime: 1000 * 60 * 5,
  });

  if (userQuery.isLoading) return <MyLoader visible />;

  if (userQuery.isError)
    return (
      <View>
        <Text>{userQuery.error.message}</Text>
      </View>
    );

  const user = userQuery.data;
  return (
    <View style={styles.container}>
      {/* {userQuery.isFetching && <MyLoader visible={userQuery.isFetching} />} */}
      <Tabs.Container
        headerHeight={330}
        renderHeader={() => <UserProfileHeader user={user!} />}
      >
        <Tabs.Tab name="Gallery">
          <View style={styles.container}>
            <GalleryTab images={user?.images!} query={userQuery} />
          </View>
        </Tabs.Tab>
        <Tabs.Tab name="Socials">
          <View style={styles.container}>
            <SocialsTab user={user!} />
          </View>
        </Tabs.Tab>
        <Tabs.Tab name="About me">
          <Tabs.ScrollView style={styles.container}>
            <AboutMeTab about={user?.about || ""} />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
