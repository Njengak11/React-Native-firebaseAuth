// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZAJWMKWiQGWV_YILTjaDtGxeO69h9ANI",
  authDomain: "fir-auth-2d8ab.firebaseapp.com",
  projectId: "fir-auth-2d8ab",
  storageBucket: "fir-auth-2d8ab.appspot.com",
  messagingSenderId: "991493935251",
  appId: "1:991493935251:web:6a78bdc25e05d907693d66"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };