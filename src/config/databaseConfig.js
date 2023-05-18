import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRxHi4dNGBgi3PSf3jYdOJHtqostKrX5U",
    authDomain: "liro-70583.firebaseapp.com",
    projectId: "liro-70583",
    storageBucket: "liro-70583.appspot.com",
    messagingSenderId: "1044749347587",
    appId: "1:1044749347587:web:84262bac4e4b99b1321736"
  };

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

export default database