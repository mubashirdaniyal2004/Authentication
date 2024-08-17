// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCL9xvHlUxJBcBC1jOQF_vGJgk7q3O8xYo",
  authDomain: "authentication-3f9bb.firebaseapp.com",
  projectId: "authentication-3f9bb",
  storageBucket: "authentication-3f9bb.appspot.com",
  messagingSenderId: "401305108831",
  appId: "1:401305108831:web:93e25c656cc88e60ae76ea",
  measurementId: "G-5SL3M5S9VR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// create account section
const signup_email = document.getElementById(`signup_email`);
const signup_password = document.getElementById(`signup_password`);
const signup_btn = document.getElementById(`signup_btn`);

// login account section
const signin_email = document.getElementById(`signin_email`);
const signin_password = document.getElementById(`signin_password`);
const signin_btn = document.getElementById(`signin_btn`);

signup_btn.addEventListener("click", createUserAccount);
signin_btn.addEventListener("click", signIn);

// check function user login or not
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`user is log in==>`);
    const uid = user.uid;
  } else {
    console.log(`user is not log in==>`);
  }
});

function createUserAccount() {
  //   console.log("email>=", signup_email.value);
  //   console.log("password>=", signup_password.value);
  createUserWithEmailAndPassword(
    auth,
    signup_email.value,
    signup_password.value
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("User=>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function signIn(params) {
  console.log("email>=", signin_email.value);
  console.log("password>=", signin_password.value);
}
