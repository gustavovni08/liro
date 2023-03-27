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

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCX48nDF7cml6wcB4lPz3TxsG_55dQOBUo",
  authDomain: "oxelab-team.firebaseapp.com",
  projectId: "oxelab-team",
  storageBucket: "oxelab-team.appspot.com",
  messagingSenderId: "86784909294",
  appId: "1:86784909294:web:6a8c682a314cf4d12878ff"
};

const firebaseApp = initializeApp(firebaseConfig);
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
