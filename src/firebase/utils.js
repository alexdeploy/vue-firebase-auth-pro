import app from './firebase.config'
import firebaseErrorHandler from './firebaseErrorHandler'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

/**
 * Sign in user with email and password.
 * @param {*} email user email
 * @param {*} password user password
 * @returns 
 */
const signInFirebase = (email, password) => 
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('You have logged in successfully.')
        // Actions
        window.location.href = '/success';
      })
      .catch((error) => firebaseErrorHandler(error));

/**
 * Check if user is logged in when state changes.
 * @param {*} user firebase user credential object
 */
const authState = () => {
    auth.onAuthStateChanged(user => {
        if(user){
            console.log('User is signed in.')
        } else {
            // Log out user from app
            console.log('User is signed out.')
        }
    })
}

export {
    signInFirebase,
    authState
}