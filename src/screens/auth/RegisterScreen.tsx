import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import HeaderRegisterAnimation from "./components/HeaderRegisterAnimation";
import useForm from "../../hooks/useForm";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../api/cloud/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any, "RegisterScreen">;

const RegisterScreen = ({ navigation }: Props) => {
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { formData, onChange } = useForm({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
    onSuccess: () => {
      alert(
        "User created successfully, please check your email to verify your account"
      );
      navigation.goBack();
    },
    onError: (error: IError) => {
      if (error.response.data.error) {
        return alert(error.response.data.error);
      }

      alert(error.response.data.msg);
    },
  });

  const handlePress = () => {
    if (
      formData.name === "" ||
      formData.lastName === "" ||
      formData.username === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      return alert("Please fill all the fields");
    }
    mutation.mutate(formData);
  };

  const focusNextField = (nextFieldRef: any) => {
    nextFieldRef.current && nextFieldRef.current.focus();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                onSubmitEditing={() => focusNextField(lastNameRef)}
                value={formData.name}
                onChangeText={(text) => onChange(text, "name")}
              />
              <TextInput
                style={styles.input}
                placeholder="Last name"
                textContentType="familyName"
                ref={lastNameRef}
                onSubmitEditing={() => focusNextField(usernameRef)}
                value={formData.lastName}
                onChangeText={(text) => onChange(text, "lastName")}
              />
            </View>
            <TextInput
              style={[styles.input, { width: "98%" }]}
              placeholder="Username"
              textContentType="username"
              ref={usernameRef}
              onSubmitEditing={() => focusNextField(emailRef)}
              value={formData.username}
              onChangeText={(text) => onChange(text, "username")}
            />
            <TextInput
              style={[styles.input, { width: "98%" }]}
              placeholder="Email"
              textContentType="emailAddress"
              keyboardType="email-address"
              ref={emailRef}
              onSubmitEditing={() => focusNextField(passwordRef)}
              value={formData.email}
              onChangeText={(text) => onChange(text, "email")}
            />
            <TextInput
              style={[styles.input, { width: "98%" }]}
              placeholder="Password"
              textContentType="password"
              secureTextEntry
              ref={passwordRef}
              value={formData.password}
              onChangeText={(text) => onChange(text, "password")}
            />

            {/*  BUTTONS */}
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Create account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
