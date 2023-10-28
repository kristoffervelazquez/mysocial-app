import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  about: string;
}

const AboutMeTab = ({ about }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About me</Text>
      <View style={styles.separator} />
      <Text style={styles.descripton}>{about}</Text>
    </View>
  );
};

export default AboutMeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  descripton :{
    fontSize: 15,
    textAlign: "center",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
    backgroundColor: 'blue',
    alignSelf: "center"
  },

});
