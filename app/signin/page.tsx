import 'server-only'
import React from "react";
import SignInForm, { GoogleSigninButton } from "./signin";
import { Suspense } from 'react'
import Loading from '../loading'

export const metadata = {
    title: 'Sign-In',
    description: 'Sign In to learn more about SayHeySounds',
  }

export default function Page() {
    return (
        <>
<Suspense fallback={<Loading/>}>
    <div className="flex">
        <div className="mx-auto relative">
            <SignInForm/>
            <h2 className="text-center">or</h2>
            <GoogleSigninButton/>
        </div>
    </div>
    </Suspense>
    </>
    );
}