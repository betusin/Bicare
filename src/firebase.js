import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// import { firebaseConfig } from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native';

const firebaseConfig = {

    apiKey: "AIzaSyCAboRDYbFNCHjThZT0m8hSfPbeRBqXBDI",
  
    authDomain: "bicare-f1e12.firebaseapp.com",
  
    projectId: "bicare-f1e12",
  
    storageBucket: "bicare-f1e12.appspot.com",
  
    messagingSenderId: "725215238476",
  
    appId: "1:725215238476:web:ea13e3d6a2bc3bbd8357e9",
  
    measurementId: "G-9HRVVDRFCQ"
  
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
    });
    
export { auth };
