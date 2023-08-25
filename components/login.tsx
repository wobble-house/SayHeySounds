'use client';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { getAuth, signOut } from 'firebase/auth';
import firebase_app from '../utils/Google/firebase/config';
import { use } from "react";
import getDocument from "../utils/Google/firebase/firestore/getData";

const auth = getAuth(firebase_app)

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
              <div className="fixed top-5 right-5 md:left-auto flex flex-col-reverse justify-end content-end items-end">
              <div className="flex flex-row items-center gap-2">
              <div className="flex hover:scale-105">
      <Link href="/signup">Sign Up</Link> 
      </div>
      <p className="font-bold">or </p>
      <div className="flex hover:scale-105">
                <button className="" onClick={handleSignIn}>Sign in</button>
                </div>
                </div>
                </div>
              </>
      )
    }
    else return (
      <>
      <div className=" fixed top-5 right-5 md:left-auto flex flex-col-reverse justify-end content-end items-end">
        <div className="flex flex-row items-center">
<Link href={'/'}>
<div className="flex flex-row items-center">
        <p className="font-bold pl-1">Hi, </p><AuthCheck/><p> ! </p>
        </div>
</Link>
      <div className="flex ml-3 pt-2 hover:scale-105">
    <button className=" " onClick={handleSignOut}>Sign out</button>  
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