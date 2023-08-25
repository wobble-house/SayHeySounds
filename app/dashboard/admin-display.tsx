'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { getAuth } from 'firebase/auth';
import updateData from "../../utils/Google/firebase/firestore/updateData";
import firebase_app from "../../utils/Google/firebase/config";
import getDocument from "../../utils/Google/firebase/firestore/getData";
import { use } from "react";

const auth = getAuth(firebase_app);

function AdminData(){
    const user = use(getDocument("users", auth?.currentUser?.uid ))
    const data = user.result.data();
    return (
<AdminContent data={data}/>
)      
}

export function AdminContent({data}) {
    const router = useRouter()
    const [firstName, setFirstName] = React.useState(() => data.firstName)
    const [lastName, setLastName] = React.useState(() => data.lastName)
    const [email, setEmail] = React.useState(() => data.email)
    const [companyName, setCompanyName] = React.useState(() => data.companyName)
    const userdata = {firstName,lastName,email,companyName};

    const handleUpdateForm = async (event) => {
        event.preventDefault()
        const { result, error } = await updateData("users", auth.currentUser.uid, userdata)
        if (error) {
            return console.log(error)
        } 
        else router.refresh()
  
    };

    
    return (
        <>
        <div className="pt-10 pb-64 z-30">
            
        <h2 className="mx-auto text-center text-black dark:text-white">Hi, <span className="animate-pulse">{data.firstName} {data.lastName}</span>!</h2>
        <p className="mx-auto text-center text-black dark:text-white">this is an admin page.</p>
        <div className="flex flex-col max-w-xl mx-auto">
            <div>

        </div>
        <h3 className="mx-auto text-center py-10 text-black dark:text-white">Update Your Info Here</h3>
    <form onSubmit={handleUpdateForm} className=" text-black dark:text-white max-w-[222px] mx-auto z-30 pb-32">
    
            <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="firstName" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    First Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" name="firstName" id="firstName" placeholder="Your First Name" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="lastName" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Last Name</label>
                <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" name="lastName" id="lastName" placeholder="Your Last Name" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="email" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder="Google" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-5 shadow-2xl">
                <label 
                htmlFor="companyName" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Company Name</label>
                <input onChange={(e) => setCompanyName(e.target.value)} value={companyName} type="text" name="companyName" id="companyName" placeholder="Google" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex justify-center mx-auto py-5 ">
              <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1 ">
              <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1 ">
                <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1 z-50" type="submit" >Update</button>
                </div>
                </div>
              </div>
            </form>
            </div>
            </div>
    </>);
    
}

export default function Admin(){
    const router = useRouter()
    if (auth.currentUser != null)
    return <AdminData/>
    else <></>
}