import * as React from "react";
import { StyleSheet, View } from "react-native";
import MyLoader from "../components/MyLoader";

export default function App() {
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setVisible(!visible);
    }, 3000);
  }, []);
  
  return (
    <View style={styles.container}>
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
