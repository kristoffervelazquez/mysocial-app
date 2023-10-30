import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const client = new QueryClient();
  return (
    <View style={styles.container}>
      <QueryClientProvider client={client}>
        <AppNavigator />
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
