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
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../api/cloud/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any, "ForgotPasswordScreen">;

const ForgotPasswordScreen = ({ navigation }: Props) => {
  const emailRef = useRef(null);
  const [email, setEmail] = React.useState("");

  const mutation = useMutation({
    mutationKey: ["password"],
    mutationFn:() => forgotPassword(email),
    onSuccess: () => {
      alert(
        "Check your email to reset your password, please check your spam folder"
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
    if (email === "") {
      return alert("Please fill email field");
    }
    mutation.mutate();
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
          <Text style={styles.title}>Forgot your password?</Text>
          <Text style={styles.description}>
            Please enter your email to reset your password
          </Text>
          {/* FORM */}
          <View style={styles.formContainer}>
            {/* INPUTS */}
            <TextInput
              style={[styles.input, { width: "98%" }]}
              placeholder="Email"
              textContentType="emailAddress"
              keyboardType="email-address"
              ref={emailRef}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
           
            {/*  BUTTONS */}
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Send recovery email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ textAlign: "right", color: "#0363FD", marginTop: 10 }}>
                    Go back to login
                </Text>
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

export default ForgotPasswordScreen;
