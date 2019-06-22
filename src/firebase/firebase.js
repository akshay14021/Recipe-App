import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcVXNbrzwrb4e9E31iMwQ8Y-OqkTtNimc",
    authDomain: "recipe-app-57192.firebaseapp.com",
    databaseURL: "https://recipe-app-57192.firebaseio.com",
    projectId: "recipe-app-57192",
    storageBucket: "",
    messagingSenderId: "485037790293",
    appId: "1:485037790293:web:5994945f2d001caf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, firebase as default };