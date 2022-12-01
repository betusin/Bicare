import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();