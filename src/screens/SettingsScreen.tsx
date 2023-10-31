import * as React from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import MyLoader from "../components/MyLoader";
import useAuthStore from "../store/useAuthStore";
import { logout } from "../api/cloud/auth";
import { useMutation } from "@tanstack/react-query";

export default function App() {
  const [visible, setVisible] = React.useState(true);
  const { unsetUser, loggedUser } = useAuthStore();
  const showLoader = (sec: number = 3000) => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, sec);
  };
  React.useEffect(() => {
    showLoader();
  }, []);

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

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Show loader" onPress={() => showLoader(6000)} />
        <Button title="Logout" onPress={handleLogout} />
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 10,
    marginBottom: 30,
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
  },
});
