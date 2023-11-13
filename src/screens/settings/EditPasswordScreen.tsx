import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useForm from '../../hooks/useForm'
import { useMutation } from '@tanstack/react-query'
import { changePasword } from '../../api/cloud/user'
import useAuthStore from '../../store/useAuthStore'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<any, "EditPasswordScreen">;


const EditPasswordScreen = ({ navigation, route }: Props) => {
  const { loggedUser } = useAuthStore();

  const mutation = useMutation({
    mutationFn: changePasword,
    onSuccess: () => alert('Password changed successfully'),
    onError: (error: IError) => {
      alert(error.response.data.message || 'There was an error please try again'); // @ts-ignore
    }
  })

  const { onChange, formData } = useForm({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleSubmit = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      return alert('Passwords do not match')
    }

    if (formData.newPassword.length < 8) {
      return alert('Password must be at least 8 characters long')
    }

    if (formData.currentPassword === formData.newPassword) {
      return alert('New password must be different from the current one')
    }

    await mutation.mutateAsync({
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
      token: loggedUser?.token || ''
    })

    onChange('', 'currentPassword')
    onChange('', 'newPassword')
    onChange('', 'confirmPassword')
    navigation.goBack()
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text>Current password:  </Text>
          <TextInput style={styles.input} secureTextEntry textContentType='password' onChangeText={text => onChange(text, 'currentPassword')} value={formData.currentPassword} />
        </View>
        <View style={styles.inputContainer}>
          <Text>New password:</Text>
          <TextInput style={styles.input} secureTextEntry textContentType='newPassword' onChangeText={text => onChange(text, 'newPassword')} value={formData.newPassword} />
        </View>
        <View style={styles.inputContainer}>
          <Text>Confirm Password:</Text>
          <TextInput style={styles.input} secureTextEntry textContentType='newPassword' onChangeText={text => onChange(text, 'confirmPassword')} value={formData.confirmPassword} />
        </View>
      </View>
      <TouchableOpacity style={{ ...styles.form, backgroundColor: '#0363FD' }} onPress={handleSubmit}>
        <Text style={{ color: 'white', textAlign: 'center', padding: 8 }}>Change password</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default EditPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 16,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 4
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: '#F2F2F2',
    padding: 8,
    borderRadius: 8
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 16,
    color: '#0363FD'
  }
})