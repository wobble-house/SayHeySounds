import "server-only";
import React from "react";
import SignUpForm, { GoogleSignupButton } from "./signup";

export const metadata = {
    title: 'Sign-Up',
    description: 'Sign Up to learn more about SayHeySounds',
  }
  
export default function Page() {
    return (
        <>
    <div className="flex">
        <div className="mx-auto relative">
            <p className="py-5 text-black dark:text-white max-w-xs">
                Sign up to learn more about us!
                </p>
            <SignUpForm/>
            <h2 className="text-center">or</h2>
            <GoogleSignupButton/>
        </div>
    </div>
    </>
    );
}