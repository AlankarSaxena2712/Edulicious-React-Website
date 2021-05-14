import firebase from 'firebase/app';
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCt8QljDiFJfc_sEnfVGYR6PzfnNMntbJ0",
    authDomain: "edulicious-ab8a7.firebaseapp.com",
    databaseURL: "https://edulicious-ab8a7-default-rtdb.firebaseio.com",
    projectId: "edulicious-ab8a7",
    storageBucket: "edulicious-ab8a7.appspot.com",
    messagingSenderId: "345540697125",
    appId: "1:345540697125:web:0e692e63e527822bb7f3cc",
    measurementId: "G-ZMJQR61HQQ"
});

export const auth = app.auth();
export default app;