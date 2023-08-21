import "server-only";
import React from "react";
import MyNavbar from "../../components/navbar";
import SignUpForm, { GoogleSignupButton } from "./signup";
import { Suspense } from 'react'
import Loading from '../loading'

export const metadata = {
    title: 'Sign-Up',
    description: 'Sign Up to learn more about SayHeySounds',
  }
  
export default function Page() {
    return (
        <>
    <MyNavbar/><Suspense fallback={<Loading/>}>
    <div className="flex">
        <div className="mx-auto py-20 relative">
            <p className="py-5 text-black dark:text-white max-w-xs">
                Sign up to learn more about us!
                </p>
            <SignUpForm/>
            <h2 className="text-center text-black dark:text-white">or</h2>
            <GoogleSignupButton/>
        </div>
    </div></Suspense>
    </>
    );
}