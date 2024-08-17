// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const signup_btn = document.getElementById("signup_btn");

// login account section
const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const signin_btn = document.getElementById("signin_btn");

// inner section
const user_email = document.getElementById("user_email");
const logout_btn = document.getElementById("logout_btn");

const auth_container = document.getElementById("auth_container");
const user_container = document.getElementById("user_container");

signup_btn.addEventListener("click", createUserAccount);
signin_btn.addEventListener("click", signIn);
logout_btn.addEventListener("click", logout);

// check function user login or not
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is log in==>");
    const uid = user.uid;
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email.innerText = user.email;
  } else {
    console.log("user is not logged in==>");
    auth_container.style.display = "block";
    user_container.style.display = "none";
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
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then((userCredential) => {
      // Signed in
      console.log("user");
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error try again later");
    });
}

function logout(params) {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
