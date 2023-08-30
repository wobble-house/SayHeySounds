'use client';
import { useState } from "react";
import getDocument from "../firestore/getData";
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import firebase_app from "../config";
import { use } from "react";

const storage = getStorage(firebase_app)
const auth = getAuth(firebase_app)

function UserData(){
    const user = use(getDocument("users", auth?.currentUser?.uid ))
    const data = user.result.data();
    const userId = JSON.stringify(data.userId)
    return (
<MediaUpload userId={userId}/>
)      
}
 
export function MediaUpload({userId}) {
    // State to store uploaded file
    const [file, setFile] = useState("");
 
    // progress
    const [percent, setPercent] = useState(0);
 
    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
 
    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
 
        const storageRef = ref(storage, `/files/${userId}/${file.name}`);
 
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);
 
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
 
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };
 
    return (
        <div>
            <input type="file" onChange={handleChange} accept="audio/*" />
            <button onClick={handleUpload}>Upload audio</button>
            <p>{percent} "% done"</p>
        </div>
    );
}
 
export default function UploadButton(){
    if (auth.currentUser != null)
    return <UserData/>
    else <></>
}