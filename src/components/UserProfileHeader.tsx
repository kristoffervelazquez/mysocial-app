import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { User } from "../shared/interfaces";
import ImageView from "react-native-image-viewing";


interface Props {
  user: User;
}

const UserProfileHeader = (props: Props) => {
  const [visible, setIsVisible] = React.useState(false);
  const { user } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.avatarContainer} onPress={() => setIsVisible(true)}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </TouchableOpacity>
      <Text style={styles.username}>{user.name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      <View>
        <ImageView
          images={[{ uri: user.avatar }]}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
      </View>
    </View>
  );
};

export default UserProfileHeader;

const styles = StyleSheet.create({
  container: { height: 330, justifyContent: "center", alignItems: "center" },
  username: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    // left: 110,
    // bottom: 50,
  },
  avatarContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "blue",
    marginBottom: 10,
    // bottom: -50,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  banner: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
});
