import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyANlJh5hof6z1JlH7QmSr5qzxtEsfxwHNc",
    authDomain: "landing-817eb.firebaseapp.com",
    databaseURL: "https://landing-817eb.firebaseio.com",
    projectId: "landing-817eb",
    storageBucket: "landing-817eb.appspot.com",
    messagingSenderId: "65064581239",
    appId: "1:65064581239:web:7226cc2142d58566d26e72",
    measurementId: "G-JBJ2W5L6N7"
};


// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {db}
export default firebase;