import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  imageId: string;
}

const ImageFooter = ({ imageId }: Props) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLike}>
        {like ? (
          <Icon name="heart-sharp" size={30} color={"red"} />
        ) : (
          <Icon name="heart-outline" size={30} color={"white"} />
        )}
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={handleLike}>
        {like ? (
          <Icon name="heart-sharp" size={30} color={"red"} />
        ) : (
          <Icon name="heart-outline" size={30} color={"white"} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLike}>
        {like ? (
          <Icon name="heart-sharp" size={30} color={"red"} />
        ) : (
          <Icon name="heart-outline" size={30} color={"white"} />
        )}
      </TouchableOpacity> */}
    </View>
  );
};

export default ImageFooter;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
