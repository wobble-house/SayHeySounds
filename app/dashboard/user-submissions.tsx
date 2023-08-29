'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { getAuth } from 'firebase/auth';
import updateData from "../../utils/Google/firebase/firestore/updateData";
import firebase_app from "../../utils/Google/firebase/config";

const auth = getAuth(firebase_app);

export function UserContent({data}) {
    const router = useRouter()
    const [firstName, setFirstName] = React.useState(() => data.firstName)
    const [lastName, setLastName] = React.useState(() => data.lastName)
    const [email, setEmail] = React.useState(() => data.email)
    const [companyName, setCompanyName] = React.useState(() => data.companyName)
    const userdata = {firstName,lastName,email,companyName};

    const handleUserUpdateForm = async (event) => {
        event.preventDefault()
        const { result, error } = await updateData("users", auth.currentUser.uid, userdata)
        if (error) {
            return console.log(error)
        } 
        else router.refresh()
        return {result, error}
    };

    
    return (
        <>
        <div className="pt-10 pb-64 z-30">
            
        <h2 className="mx-auto text-center text-black dark:text-white">Hi, <span className="animate-pulse">{data.firstName} {data.lastName}</span>!</h2>
        <p className="mx-auto text-center text-black dark:text-white">this is an admin page.</p>
        <div className="flex flex-col max-w-xl mx-auto">
            <div>

        </div>
        <h3 className="mx-auto text-center py-10 text-black dark:text-white">Your Submissions Info Here</h3>
    {firstName}
    {lastName}
            </div>
            </div>
    </>);
    
}