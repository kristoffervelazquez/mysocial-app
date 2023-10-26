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
import HeaderRegisterAnimation from "./components/HeaderRegisterAnimation";

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      enabled
    >
      <View style={styles.animatedContainer}>
        <HeaderRegisterAnimation />
      </View>
      <View style={styles.box}>
        {/* Login Form */}
        <Text style={styles.title}>Create your account!</Text>
        <Text style={styles.description}>
          Please fill the form to create your account.
        </Text>
        {/* FORM */}
        <View style={styles.formContainer}>
          {/* INPUTS */}
          <View style={styles.inputContaier}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              textContentType="name"
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              textContentType="familyName"
            />
          </View>
          <TextInput
            style={[styles.input, { width: "98%" }]}
            placeholder="Username"
            textContentType="username"
          />
          <TextInput
            style={[styles.input, { width: "98%" }]}
            placeholder="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.input, { width: "98%" }]}
            placeholder="Password"
            textContentType="password"
            secureTextEntry
          />

          {/*  BUTTONS */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

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
    width: "48%",
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  inputContaier: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
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
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default RegisterScreen;
