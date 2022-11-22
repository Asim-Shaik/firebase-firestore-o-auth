import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdacQk06DUXMMBVfPFlHuswTZ2K_1f-hU",
  authDomain: "fir-b643a.firebaseapp.com",
  projectId: "fir-b643a",
  storageBucket: "fir-b643a.appspot.com",
  messagingSenderId: "845507337073",
  appId: "1:845507337073:web:ff537514b1445f7096f4d0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const docRef = await addDoc(collection(db, "users"), {
      name: res.user.displayName,
      email: res.user.email,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const signOutUser = () => {
  signOut(auth);
};
