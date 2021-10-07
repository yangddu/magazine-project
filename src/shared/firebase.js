import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCfFvw-fEA30q4I-OAsM6Nbb4XO5w42dtw",
    authDomain: "magazine-21773.firebaseapp.com",
    projectId: "magazine-21773",
    storageBucket: "magazine-21773.appspot.com",
    messagingSenderId: "1062013054359",
    appId: "1:1062013054359:web:6b1b6c5aaaafefe6bca8d2",
    measurementId: "G-YDGSCMV3BV"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage } ;