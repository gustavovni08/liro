import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './src/components/Home/HomeScreen';
import { ProfileScreen } from './src/components/Profile/ProfileScreen';
import { SignUpScreen } from './src/components/SignUp/signUp';
import { SignInScreen } from './src/components/SingIn/SignIn';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyDRxHi4dNGBgi3PSf3jYdOJHtqostKrX5U",
  authDomain: "liro-70583.firebaseapp.com",
  projectId: "liro-70583",
  storageBucket: "liro-70583.appspot.com",
  messagingSenderId: "1044749347587",
  appId: "1:1044749347587:web:84262bac4e4b99b1321736"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp)
// Initialize Firebase Authentication and get a reference to the service

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='SignIn' component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


