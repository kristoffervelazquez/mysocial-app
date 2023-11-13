import * as React from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import MyLoader from "../../components/MyLoader";
import useAuthStore from "../../store/useAuthStore";
import { logout } from "../../api/cloud/auth";
import { useMutation } from "@tanstack/react-query";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";


type Props = NativeStackScreenProps<any, "SettingsScreen">;
export default function SettingsScreen({ navigation, route }: Props) {
  const { unsetUser, loggedUser } = useAuthStore();

  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: logout,
    onSuccess: () => {
      unsetUser();
    },
    onError: (e: any) => {
      console.log("error", e);
    },
  });

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => {
          mutation.mutate(loggedUser?.email!);
        },
      },
    ]);
  };

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.card} onPress={item.action || undefined}>
        <View style={{ padding: 16 }}>
          <Text style={{ color: item.color }}>{item.key}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const DATA = [{ key: 'Account', color: '#0363FD', action: () => navigation.push('EditAccountScreen') }, { key: 'Privacy', color: '#0363FD' }, { key: 'Logout', action: handleLogout, color: 'red' }]

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
      <MyLoader visible={mutation.isPending} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingHorizontal: 16,
  },
  card: {
    padding: 12,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 4
  }
});
