import React, {useState} from 'react'
import {View, Text,StyleSheet, ScrollView,Platform} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const API_URL = Platform.OS === 'ios' ? 'http://localhost:19006' : 'http://localhost:19006';

export default function SignUpScreen() {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();
  const onRegisterPressed = () => {
    console.warn("Sign Up");
    const payload = {
      email,
      name,
      password,
  };
  console.warn("emailul introdus este: " + email);
  fetch(`${API_URL}/signup`, {
    
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
          navigation.navigate('ConfirmEmail');
           
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

    
  }
  const onSignInPressed = () => {
    console.warn('On SignInPressed');
    navigation.navigate('SignIn');
  }
  const onTermsOfUsePressed = () => {
    console.warn('on terms of use');
    
  }
  const onPrivacyPolicy = () => {
    console.warn('on privacy policy');
  }
    return (<ScrollView showsVerticalScrollIndicator={false}>      
      <View style = {styles.root}>
        <Text style={styles.title}>Create an account</Text>
    <CustomInput placeholder="Username" value={name} setValue = {setUsername} />
    <CustomInput placeholder="Email" value ={email} setValue = {setEmail} />
    <CustomInput placeholder="Password" value ={password} setValue = {setPassword} secureTextEntry={true}/>
    <CustomInput placeholder="Repeat Password" value ={passwordRepeat} setValue = {setPasswordRepeat} secureTextEntry={true}/>
    <CustomButton text="Register" onPress={onRegisterPressed}/>
    <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress= {onPrivacyPolicy}>Privacy Policy</Text></Text>
    <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY" />
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