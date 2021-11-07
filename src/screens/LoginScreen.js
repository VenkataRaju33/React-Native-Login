import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

import { theme } from '../core/theme'
import { nameValidator } from '../helpers/nameValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const nameError = nameValidator(name.value)
    const passwordError = passwordValidator(password.value)
    if (nameError || passwordError) {
      setName({ ...name, error: nameError })
      setPassword({ ...password, error: passwordError })
      return
    }
  let user_records=JSON.parse(localStorage.getItem("users"))?
    JSON.parse(localStorage.getItem("users")):[]

    if(user_records.some((v)=>{return v.name.value==name.value}))
{
let user=user_records.filter(user=>user.name.value==name.value)[0]
console.log(user,"user")
if(user.name.value==name.value && user.password.value==password.value){
  navigation.reset({
    index: 0,
    routes: [{ name: 'Dashboard' }],
  })
}
else{
  alert("Invalid Credentials")
}
}
else{
alert("You are not registered,Please signup")
}
  }
  return (
    <Background>  
       <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
     
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
