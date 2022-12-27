import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// console.log(process.env.API_KEY)

const firebaseConfig = {
  apiKey: "AIzaSyDRC7KlBFFOnvQVovWFqneWp0i4hW-GP5w",
  authDomain: "chatgpt-9a01b.firebaseapp.com",
  projectId: "chatgpt-9a01b",
  storageBucket: "chatgpt-9a01b.appspot.com",
  messagingSenderId: "420118153863",
  appId: "1:420118153863:web:224ac6ce9e46d8fd174622",
  measurementId: "G-RJKQFVZ80E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { firebaseConfig, app, auth }