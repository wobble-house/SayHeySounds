'use client';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { getAuth, signOut } from 'firebase/auth';
import firebase_app from '../utils/Google/firebase/config';
import { use } from "react";
import getDocument from "../utils/Google/firebase/firestore/getData";

const auth = getAuth(firebase_app);

export default function LoginButton() {
  const router = useRouter();
    const handleSignOut = () => {
      signOut(auth);
      router.refresh();
    }
    const handleSignIn = () => {
      router.push(
        '/signin'
      );
    }
    if (auth.currentUser === null) {
      return (
              <>
              <div className="fixed top-5 right-5 md:left-auto flex flex-col-reverse justify-end content-end items-end z-50">
              <div className="flex flex-row items-center">
      <p className="text-black dark:text-white font-bold pl-1"><Link href="/signup">Sign Up</Link> or </p>
      <div className="flex ml-3 pt-2 hover:scale-105">
              <div className="  pr-1 pb-1 mt-1 pt-1">
              <div className="  pr-1 pb-1 -ml-1 -mt-1">
                <button className=" text-white   px-4 py-1 -ml-1 -mt-1" onClick={handleSignIn}>Sign in</button>
                </div>
                </div>
                </div>
                </div>
                </div>
              </>
      )
    }
    else return (
      <>
      <div className=" fixed top-5 right-5 md:left-auto flex flex-col-reverse justify-end content-end items-end z-50">
        <div className="flex flex-row items-center">
<Link href={'/admin'}>
<div className="flex flex-row items-center">
        <p className="text-black dark:text-white font-bold pl-1">Hi, </p><AuthCheck/><p> ! </p>
        </div>
</Link>
      <div className="flex ml-3 pt-2 hover:scale-105">
  <div className="  pr-1 pb-1 mt-1 pt-1">
  <div className="  pr-1 pb-1 -ml-1 -mt-1">
    <button className=" text-white   px-4 py-1 -ml-1 -mt-1" onClick={handleSignOut}>Sign out</button>
    </div>
    </div>        
    </div>
    </div>
    </div>
    </>
    )
};

function AuthCheck(){
  const user = use(getDocument("users", auth.currentUser.uid ))
  const data = user.result.data();
  if (data == undefined)
  return(<></>)
  else return (
<p className="text-black dark:text-white"> {data.firstName} </p>
  )
}