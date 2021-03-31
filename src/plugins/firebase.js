import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCg9KV8hsPe4fQZB5qAeFGjWqb8NyO5Xdg",
    authDomain: "appli-ecole.firebaseapp.com",
    projectId: "appli-ecole",
    storageBucket: "appli-ecole.appspot.com",
    messagingSenderId: "95967543424",
    appId: "1:95967543424:web:230dbffa5658f06f786665",
    measurementId: "G-3TXCLZVK3S"
}

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const todoCollection = db.collection('todo')

// export utils/refs
export {
  db,
  auth,
  todoCollection,
}