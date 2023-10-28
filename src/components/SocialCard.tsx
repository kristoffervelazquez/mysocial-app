import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Social } from "../shared/interfaces";
import SocialIcon from "./SocialIcon";

interface Props {
  item: Social;
  onPress: () => void;
}

const SocialCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      {/* <Image source={{ uri: '' }} style={styles.icon} /> */}
      {/* <Icon
        name={icon.iconName}
        size={48}
        color={icon.color}
        style={styles.icon}
      /> */}
      <SocialIcon name={item.type.name} size={48} style={styles.icon}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.type.name}</Text>
        <View style={{ height: 4 }} />
        <Text style={styles.text}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
});
