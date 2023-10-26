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

const LoginScreen = () => {
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
              <Text style={[styles.description, { color: "#3071E7" }]}>
                Click here
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: "transparent", width: "100%" }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.description, { color: "#3071E7" }]}>
                Create account
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3071E7",
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
    backgroundColor: "#3071E7",
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

export default LoginScreen;
