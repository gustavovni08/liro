import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 50,
    },
    buttonContainer: {
      width: '80%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 100,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={() => navigation.navigate('SignUp')} />
        <Button title="Fazer login" onPress={() => navigation.navigate('SignIn')} />
      </View>
    </View>
  );
};

export { HomeScreen };
