'use client'
import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import addData from "../firestore/addData";
import getDocument from "../firestore/getData";

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function signInGoogle() {
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
    const getdata = getDocument("users", user.uid )
    const userdata = getdata.result.data();
    let data = {}
    if (userdata !== null) return (data.uid = user.uid,
    data.email = user.email,
    data.firstName = userdata.firstName,
    data.lastName = userdata.lastName,
    data.companyName = userdata.companyName,
    addData("users", user.uid, data))
    else return ( data.uid = user.uid,
    data.email = user.email,
    data.firstName = "First Name",
    data.lastName = "Last Name",
    data.companyName = "Company Name",
    addData("users", user.uid, data));
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


