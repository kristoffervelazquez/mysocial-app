import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, "EditAccountScreen">;

const EditAccountScreen = ({ navigation }: Props) => {

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.card} onPress={item.action || undefined}>
        <View style={{ padding: 16 }}>
          <Text style={{ color: item.color }}>{item.key}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const DATA = [{ key: 'Edit Account Information', color: '#0363FD', action: () => navigation.push('EditAccountInfoScreen') }, { key: 'Change Password', color: '#0363FD', action: () => navigation.push('EditPasswordScreen') }]

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
    </View>
  );
}

export default EditAccountScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingHorizontal: 16,
  },
  card: {
    padding: 12,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 4
  }
})