import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import { StackActions, useNavigation } from "@react-navigation/native";

const buttons = [
  { title: "Scan", icon: "qrcode-scan" },
  { title: "Share", icon: "qrcode-plus" },
];

const QrDropDownMenuButton = () => {
  const navigation = useNavigation();
  return (
    <SelectDropdown
      data={buttons}
      onSelect={(selectedItem) => {
        switch (selectedItem.title) {
          case "Scan":
            const readQr = StackActions.push("QrScanner");
            return navigation.dispatch(readQr);
          case "Share":
            const generateQr = StackActions.push("QrGenerationScreen");
            return navigation.dispatch(generateQr);
          default:
            break;
        }
      }}
      defaultButtonText={"Select country"}
      renderCustomizedRowChild={(item, index) => {
        // To render customized row child. May be a container with multiple subviews or an element without a parent view.
        return (
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Icon2
              name={item.icon}
              size={20}
              color="blue"
              style={{ marginLeft: 10 }}
            />
            <Text>{item.title}</Text>
          </View>
        );
      }}
      buttonStyle={{
        backgroundColor: "transparent",
        width: 70,
        height: 40,
        borderRadius: 10,
      }}
      renderDropdownIcon={() => {
        return (
          <Icon
            name="qr-code-outline"
            size={30}
            color="blue"
            style={{ marginRight: 10, alignContent: "center" }}
          />
        );
      }}
      dropdownIconPosition={"right"}
      dropdownStyle={{
        backgroundColor: "#fafafa",
        width: 80,
      }}
      rowStyle={{
        backgroundColor: "#ffffff",
        borderBottomColor: "#fafafa",
      }}
    />
  );
};

export default QrDropDownMenuButton;


