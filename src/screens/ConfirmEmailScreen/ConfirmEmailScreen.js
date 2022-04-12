import React, {useState} from 'react'
import {View, Text,StyleSheet, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
export default function ConfirmEmailScreen() {
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.warn("On Confirm Pressed");
    navigation.navigate('HomeScreen');
  }
  const onSignInPressed = () => {
    console.warn('On SignInPressed');
    navigation.navigate('SignIn');
  }
  const onResendPress = () => {
    console.warn('On Resend Press');
  }
  
    return (<ScrollView showsVerticalScrollIndicator={false}>      
      <View style = {styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput placeholder="Username" value={username} setValue = {setUsername} />
    <CustomInput placeholder="Enter your confirmation code" value={code} setValue = {setCode} />

    <CustomButton text="Confirm" onPress={onConfirmPressed}/>

    <CustomButton text="Back to Sign In" onPress={onSignInPressed} type="TERTIARY"/>

    <CustomButton text="Resend Code" onPress={onResendPress} type="SECONDARY" />
      </View>
      </ScrollView>

    );
  }
   

  const styles = StyleSheet.create({
      root:{
          alignItems: 'center',
          padding: 20,
      },
      logo:{
          width: '70%',
          maxWidth: 500,
          height: 100,
          maxHeight:200,
      },
      title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,

      },
      text:{
        color: 'gray',
        marginVertical: 10,
      },
      link: {
        color: '#FDB075',
      }
  });