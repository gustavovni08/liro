import { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigation } from "@react-navigation/native";

import { doc, setDoc } from "firebase/firestore";
import database from "../../config/databaseConfig";

const SignUpScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      
      const userRef = doc(database, 'usuarios', email)
      setDoc(userRef, {foto: ""})

      navigation.navigate('Home')
    }) 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Endereço de e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleSignUp} />
    </View>
  );
};

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
});

export { SignUpScreen };
