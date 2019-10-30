import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyD1odPZExhCJrhucxCW_5WOlkVLrNPG8zw",
    authDomain: "fptribe.firebaseapp.com",
    databaseURL: "https://fptribe.firebaseio.com",
    projectId: "fptribe",
    storageBucket: "fptribe.appspot.com",
    messagingSenderId: "814789531035",
    appId: "1:814789531035:web:bd00a2f8ebc3e0026e3d3e",
    measurementId: "G-2QT5Y4F194"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database()

firebaseDB.ref('users').once('value').then((snapshot)=>{
    console.log(snapshot.val())
})