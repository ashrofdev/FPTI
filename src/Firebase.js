import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/storage'


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

export const firebaseDB = firebase.database()

const users = []
firebaseDB.ref().once('value').then((snapshot) => {
    Object.entries(snapshot.val()).map(e => {
        users.push(e[1])
    })
})
const length = users.length
console.log(length)


export const firebas = firebase
firebaseDB.ref().child('new').push({
    A: 'one',
    B: 'two',
    C: 'three',
    D: 'four',
    E: 'five',
    F: 'three',
    G: 'four',
    H: 'five',
    I: 'three',
    J: 'four',
    K: 'five'
})
