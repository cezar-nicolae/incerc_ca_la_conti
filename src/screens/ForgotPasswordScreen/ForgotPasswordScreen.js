import React, {useState} from 'react'
import {View, Text,StyleSheet, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
export default function ForgotPasswordScreen() {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const onSendPressed = () => {
    console.warn("On Send Pressed");
    navigation.navigate('NewPassword');
  }
  const onSignInPressed = () => {
    console.warn('On SignInPressed');
    navigation.navigate('SignIn');
  }
  
    return (<ScrollView showsVerticalScrollIndicator={false}>      
      <View style = {styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput placeholder="Username" value={username} setValue = {setUsername} />
    <CustomButton text="Send" onPress={onSendPressed}/>

    <CustomButton text="Back to Sign In" onPress={onSignInPressed} type="TERTIARY"/>


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