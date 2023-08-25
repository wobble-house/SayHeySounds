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
        <p className="font-bold pl-1 text-black dark:text-white">Hi, </p><AuthCheck/><p className="font-bold text-black dark:text-white"> ! </p>
        </div>
</Link>
      <div className="flex hover:scale-105">
    <button className="font-bold pl-1 text-black dark:text-white" onClick={handleSignOut}>Sign out</button>  
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
    <Link href={'/dashboard'}>
<p className="text-black dark:text-white font-bold"> {data.firstName} </p>
</Link>
  )
}