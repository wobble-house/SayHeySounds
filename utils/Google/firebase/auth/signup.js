'use client'
import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import addData from "../firestore/addData";

const auth = getAuth(firebase_app);

export default async function signUp({email, password, data}) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password).then((user) => {
        data.userId = user.user.uid;
        addData("users", user.user.uid, data)});
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function subsSignUp({email, password, data, formData}) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password).then((user) => {
        const id = Math.random().toString(36).slice(2, 22)
        data.userId = user.user.uid
        formData.userId = user.user.uid
        addData("users", data, user.user.uid)
        addData("submissions", formData, id)})
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function signUpGoogle() {
    const provider = new GoogleAuthProvider();
    let result = null,
        error = null;
    try {
        provider.addScope('profile');
        provider.addScope('email');
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    let data = {}
    data.userId = user.uid
    data.email = user.email
    data.firstName = "Your First Name"
    data.lastName = "Your Last Name"
    data.companyName = "Your Company Name"
    addData("users", user.uid, data)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    } catch (e) {
        error = e;
    }

    return { result, error };
}