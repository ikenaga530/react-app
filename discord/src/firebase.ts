import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuoIl8ynw7-Ou8zQal6U5Zx_npFsvyg0I",
  authDomain: "discord-e5243.firebaseapp.com",
  projectId: "discord-e5243",
  storageBucket: "discord-e5243.appspot.com",
  messagingSenderId: "231442549754",
  appId: "1:231442549754:web:55f5e8f8cda2dae4abb243",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
