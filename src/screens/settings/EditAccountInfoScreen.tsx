import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, "EditAccountInfoScreen">;

const EditAccountInfoScreen = () => {
  return (
    <View>
      <Text>EditAccountInfoScreen</Text>
    </View>
  )
}

export default EditAccountInfoScreen

const styles = StyleSheet.create({})