import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  onPress: () => void;
  icon?: string;
}

const MyFAB = ({ onPress, icon = 'add-outline' }: Props) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fab} onPress={onPress}>
        <Icon name={icon} size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 16,
    marginRight: 16,
  },
  fab: {
    width: 56,
    height: 56,
    backgroundColor: "#0363FD",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
});

export default MyFAB;
