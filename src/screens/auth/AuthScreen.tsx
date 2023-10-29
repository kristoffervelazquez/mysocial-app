import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import HeaderAnimation from "./components/HeaderAnimation";
import { StackActions } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useAuthStore from "../../store/useAuthStore";

type Props = NativeStackScreenProps<any, "AuthScreen">;

const AuthScreen = ({ navigation }: Props) => {
  const { setToken } = useAuthStore();

  const handlePressRegister = () => {
    const pushAction = StackActions.push("RegisterScreen");
    navigation.dispatch(pushAction);
  };

  const handlePressLogin = () => {
    setToken("123");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      enabled
    >
      <View style={styles.animatedContainer}>
        <HeaderAnimation />
      </View>
      <View style={styles.box}>
        {/* Login Form */}
        <Text style={styles.title}>Welcome to mySocial!</Text>
        <Text style={styles.description}>
          Please sign up to start using the app.
        </Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            textContentType="password"
            secureTextEntry
          />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.description}>Forgot your password? </Text>
            <TouchableOpacity>
              <Text style={[styles.description, { color: "#0363FD" }]}>
                Click here
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: "transparent", width: "100%" }}>
            <TouchableOpacity onPress={handlePressLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressRegister}>
              <Text style={[styles.description, { color: "#0363FD" }]}>
                Create account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0363FD",
  },
  animatedContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  box: {
    flex: 2,
    backgroundColor: "white",
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    padding: 10,
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 40,
    alignItems: "center",
    // backgroundColor: "red",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    textAlign: "center",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#0363FD",
    borderRadius: 10,
    marginBottom: 0,
    paddingHorizontal: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
