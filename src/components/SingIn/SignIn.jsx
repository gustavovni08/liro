import { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'

const SignInScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 5,
      marginVertical: 10,
      width: '80%',
    },
    link: {
      color: '#0000EE',
      textDecorationLine: 'underline',
      // Adding space
      marginVertical: 10,
    }
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const navigation = useNavigation();
  const auth = getAuth();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // Navigate to a new screen after a successful login
        navigation.navigate('Profile')

        // Clean up the input fields
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
          setEmailError('E-mail inválido');
        } else {
          setEmailError('');
        }

        if (error.code === 'auth/wrong-password') {
          setPasswordError('Senha incorreta');
        } else {
          setPasswordError('');
        }
      });
  }

  const handlePasswordRecovery = () => {
    if (email !== '') {
      sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password Recovery Email sent');
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  return (
    <View style={styles.container}>

      {emailError ? <Text>{emailError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Endereço de e-mail"
        onChangeText={(text) => {
          setEmail(text);
          setEmailError('');
        }}
        value={email}
      />

      {passwordError ? <Text>{passwordError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError('');
        }}
        value={password}
        secureTextEntry
      />
      <Text style={styles.link} onPress={handlePasswordRecovery}>Recuperar Senha</Text>


      <Button title="Entrar" onPress={handleSignIn} />
    </View>
  );
};

export { SignInScreen };
