import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StackActions } from "@react-navigation/native";
import useAuthStore from "../store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { getSocials } from "../api/cloud/socials";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FlatList } from "react-native-gesture-handler";
import SocialIcon from "../components/SocialIcon";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SocialSwitches = Record<string, boolean>;

type Props = NativeStackScreenProps<any, "QrGenerationScreen">;

const QrGenerationScreen = ({ navigation }: Props) => {
  const { loggedUser } = useAuthStore();
  const [isEnabled, setIsEnabled] = useState(false);
  const [socialSwitches, setSocialSwitches] = useState<SocialSwitches>({});

  // fetch socials
  const socialsQuery = useQuery({
    queryKey: ["socials", loggedUser?.username],
    queryFn: () => {
      return getSocials(loggedUser?.username!);
    },
    enabled: !!loggedUser?.username,
  });

  // set all switches to true on mount
  useEffect(() => {
    if (socialsQuery.isSuccess) {
      socialsQuery.data?.forEach((social) => {
        handleToggleSocialSwitch(social._id, true);
      });
    }
  }, [socialsQuery.isSuccess]);

  useEffect(() => {
    // check if all switches are on
    const allSwitchesOn = Object.values(socialSwitches).every(
      (switchValue) => switchValue
    );
    if (allSwitchesOn) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [socialSwitches]);

  // set social switches
  const toggleAllSwitch = () => {
    setIsEnabled((prevIsEnabled) => !prevIsEnabled);

    const updatedSocialSwitches: SocialSwitches = {};
    for (const social of socialsQuery.data || []) {
      updatedSocialSwitches[social._id] = !isEnabled;
    }
    setSocialSwitches(updatedSocialSwitches);
  };

  // set one social switch
  const handleToggleSocialSwitch = (socialId: any, value?: boolean) => {
    if (value) {
      setSocialSwitches((prevSocialSwitches) => ({
        ...prevSocialSwitches,
        [socialId]: value,
      }));
      return;
    }
    setSocialSwitches((prevSocialSwitches) => ({
      ...prevSocialSwitches,
      [socialId]: !prevSocialSwitches[socialId],
    }));
  };

  const generateQR = () => {
    if (Object.values(socialSwitches).every((switchValue) => switchValue === false)) {
      return alert("Select at least one social to share");
    }
    const pushAction = StackActions.push("QrScreen", {
      data: {
        username: loggedUser?.username,
        // pass array of only true socials
        socials: socialsQuery.data?.filter(
          (social) => socialSwitches[social._id]
        ),
      },
    });
    navigation.dispatch(pushAction);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={{ fontWeight: "900" }}>Select socials to share</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingTop: 20,
        }}
      >
        {isEnabled ? (
          <Icon name="lock-open-outline" size={30} color="green" />
        ) : (
          <Icon name="lock-closed-outline" size={30} color="red" />
        )}
        <Switch onChange={toggleAllSwitch} value={isEnabled} />
      </View>
      <View style={{ height: 20 }} />
      <FlatList
        data={socialsQuery.data}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <SocialIcon name={item.type.name} size={30} />
            <Switch
              onChange={() => handleToggleSocialSwitch(item._id)}
              value={socialSwitches[item._id]}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        keyExtractor={(item) => item._id}
      />

      <TouchableOpacity style={styles.qrContainer} onPress={() => generateQR()}>
        <Text style={styles.qrText}>Generate QR</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default QrGenerationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  image: {
    backgroundColor: "red",
    width: 330,
    height: 330,
    resizeMode: "stretch",
  },
  qrContainer: {
    bottom: 50,
    backgroundColor: "blue",
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
  },
  qrText: { fontWeight: "bold", color: "white", padding: 10 },
});
