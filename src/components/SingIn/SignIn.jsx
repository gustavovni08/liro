import { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

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
  });
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Lógica para enviar os dados do formulário ao servidor
    console.log('Send data');
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

      <Button title="Entrar" onPress={handleSignUp} />
    </View>
  );
};

export { SignInScreen };
