import * as React from "react";
import { Button, StyleSheet, View } from "react-native";
import MyLoader from "../components/MyLoader";
import useAuthStore from "../store/useAuthStore";

export default function App() {
  const [visible, setVisible] = React.useState(true);
  const { setToken } = useAuthStore();
  const showLoader = (sec: number = 3000) => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, sec);
  };
  React.useEffect(() => {
    showLoader();
  }, []);

  const handleLogout = () => {
    setToken("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Show loader" onPress={() => showLoader(6000)} />
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <MyLoader visible={visible} />
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
