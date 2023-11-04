import { StyleSheet } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";

const privateButtons = ["Delete"];
const publicButtons = ["Report"];


interface Props {
    id: string;
}
const ImageDropDownMenu = ({ id }: Props) => {
  const route = useRoute();
  const isPublicProfile = route.name != "PublicProfileScreen";
  return (
    <SelectDropdown
      data={isPublicProfile ? publicButtons : privateButtons}
      onSelect={(selectedItem) => {
        switch (selectedItem) {
          case "Delete":
            console.log("Delete ", id);
            break;
          case "Report":
            console.log("Report ", id);
            break;
          default:
            break;
        }
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return "";
      }}
      defaultButtonText={"Select country"}
      buttonStyle={{
        backgroundColor: "transparent",
        width: 70,
        height: 40,
        borderRadius: 10,
      }}
      renderDropdownIcon={() => {
        return (
          <Icon
            name="ellipsis-vertical"
            size={20}
            color="white"
            style={{ marginRight: 10, alignContent: "center" }}
          />
        );
      }}
      dropdownIconPosition={"right"}
      dropdownStyle={{
        backgroundColor: "#fafafa",
        width: 75,
      }}
      rowStyle={{
        backgroundColor: "#ffffff",
        borderBottomColor: "#fafafa",
      }}
    />
  );
};

export default ImageDropDownMenu;

const styles = StyleSheet.create({});
