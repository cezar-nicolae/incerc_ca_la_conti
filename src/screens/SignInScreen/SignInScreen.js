import React, {useState} from 'react'
import {View, Text,Image,StyleSheet, useWindowDimensions,ScrollView,Platform} from 'react-native'
import Logo from '../../../assets/images/Logo_1.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://localhost:19006';
export default function SignInScreen() {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onLoggedIn = token => {
    fetch(`${API_URL}/private`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
    })
    .then(async res => { 
        try {
            const jsonRes = await res.json();
            if (res.status !== 200) {
              console.warn("eroare try nu e 200");
          }
            else {
              console.warn("yesss");
            }
        } catch (err) {
          console.warn(err);
            console.log(err);
        };
    })
    .catch(err => {
        console.warn(err);
        console.log(err);
    });
}

  const onSignInPressed = () => {
    console.warn("Sign in");
    const payload = {
      name,
      password
  };
  fetch(`${API_URL}/login`, {
    
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
})
.then(async res => { 
  console.warn("go in fetch");
  console.warn("resursa mea" );
  //console.warn(res.json())
    try {
        const jsonRes = await res.json();
        console.warn("try");
        //console.warn(res.text());
        if (res.status !== 200) {
          console.warn("eroare");
        } else {
          console.warn("e bine!");
            onLoggedIn(jsonRes.token);
            navigation.navigate('HomeScreen');
           
        }
    } catch (err) {
        console.log(err);
        console.warn("eroare1"+ err);

    };
})
.catch(err => {
    console.log(err);
    //console.warn("eroare"+err);

});
    //validate user
  }
  const onForgotPasswordPressed = () =>{
    console.warn('onForgotPasswordPressed');
    navigation.navigate('ForgotPassword');
  }
  const onSignUpPressed = () => {
    console.warn('On SignUpPress');

    navigation.navigate('SignUp');
  }
    const {height} = useWindowDimensions();

    return (<ScrollView showsVerticalScrollIndicator={false}>      
      <View style = {styles.root}>
    <Image source = {Logo} style = {[styles.logo,{height: height *0.3}]} resizeMode = "contain" />
    <CustomInput placeholder="Username" value={name} setValue = {setUsername} />
    <CustomInput placeholder="Password" value ={password} setValue = {setPassword} secureTextEntry={true}/>
    <CustomButton text="Sign In" onPress={onSignInPressed}/>
    <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY"/>
    <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
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
  });