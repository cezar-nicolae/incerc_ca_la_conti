import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View,Text} from 'react-native';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name ="SignIn" component = {SignInScreen}/>
                <Stack.Screen name ="SignUp" component = {SignUpScreen}/>
                <Stack.Screen name ="ConfirmEmailScreen" component = {ConfirmEmailScreen}/>
                <Stack.Screen name ="ForgotPasswordScreen" component = {ForgotPasswordScreen}/>
                <Stack.Screen name ="NewPasswordScreen" component = {NewPasswordScreen}/>
                <Stack.Screen name ="HomeScreen" component = {HomeScreen}/>
                </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;