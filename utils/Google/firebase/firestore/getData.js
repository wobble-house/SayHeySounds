'use client'
import firebase_app from "../config";
import { getFirestore, doc, getDoc, getDocs, query, where, collection } from "firebase/firestore";

const db = getFirestore(firebase_app)

export default async function getDocument(collection, id) {
    let docRef = doc(db, collection, id);
    let result = null;
    let error = null;
    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getDocuments({collectionName, fieldPath, value}){
    let result = null;
    let error = null;
    const db = getFirestore(firebase_app)
    const q = query(collection(db,collectionName), where(fieldPath, "==", value));
    try {
        result = await getDocs(q)
    } catch (e) {
        error = e;
    }
    return { result, error };
  };