import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Social } from "../shared/interfaces";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import SocialIcon from "../components/SocialIcon";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<any, "QrScreen">;

const QrScreen = ({ navigation, route }: Props) => {
  const { data } = route.params!;

  const socials = data.socials as Social[];

  useEffect(() => {}, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fmy-social-v1.netlify.app%2F${data}`,
          }}
        />
          <FlatList
            data={socials}
            renderItem={({ item }) => (
              <SocialIcon name={item.type.name} size={30} />
            )}
            keyExtractor={(item) => item._id}
            contentContainerStyle={styles.flatlist}
            horizontal={true}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            scrollEnabled={false}
          />

        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default QrScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  flatlist: {
    width: "90%",
    height: "50%",
    marginTop: 40,
    padding: 10,
    justifyContent: "center",
  },
});
