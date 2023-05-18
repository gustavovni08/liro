import { useNavigation } from "@react-navigation/native";
import {
  getAuth,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from "react-native";
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { useState } from "react"

const ProfileScreen = () => {

  const navigation = useNavigation();
  const auth = getAuth();
  const storage = getStorage();

  const user = auth.currentUser;
  const storageRef = ref(storage, `${user.email}`)
  const [profilePhoto, setProfilePhoto] = useState(user.photoURL)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProfilePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      uploadBytes(storageRef, result).then((snapshot) =>{
        console.log('uia')
        return snapshot.storageRef.getDownloadURL()
      })        
    }
  };
  

  const handleVerifyEmail = () => {
    sendEmailVerification(user).then(() => {
      console.log("Email sent");
    });
  };

  console.log(user.displayName);
  console.log(user.email);
  console.log(user.emailVerified);
  console.log(user.photoURL);
  console.log(user.uid);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {profilePhoto ? (
          <Image source={profilePhoto} onPress={handleProfilePhoto} />
        ) : (
          <Ionicons
            name="person-circle-outline"
            size={100}
            color="gray"
            onPress={handleProfilePhoto}
          />
        )}
      </TouchableOpacity>

      <Text>Profile Screen</Text>
      <Text>{user.displayName}</Text>
      <Text>{user.email}</Text>
      {user.emailVerified ? (
        <Text style={styles.verifiedEmail}>Verificado</Text>
      ) : (
        <Text style={styles.notVerifiedEmail} onPress={handleVerifyEmail}>
          Não verificado
        </Text>
      )}
      <Text>{user.photoURL}</Text>
      <Button title="Sair" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  verifiedEmail: {
    color: "green",
  },
  notVerifiedEmail: {
    color: "red",
  },
});

export { ProfileScreen };
