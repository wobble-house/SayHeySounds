import "server-only";
import SignUpForm, { GoogleSignupButton } from "./signup";
import { Animation } from "@/utils/animation/animation";
import Nav from "@/components/nav";
import LoginButton from "@/components/login";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata = {
    title: 'Sign-Up',
    description: 'Sign Up to learn more about SayHeySounds',
  }
  
export default function Signup() {
    return (
        <>
        <LoginButton/>
<Animation mode={'wait'} initial={'false'}>
<Suspense fallback={<Loading/>}>
    <div className="flex mt-20">
        <div className="mx-auto relative">
            <p className="py-5 text-black dark:text-white max-w-xs">
                Sign up to learn more about us!
                </p>
            <SignUpForm/>
            <h2 className="text-center">or</h2>
            <GoogleSignupButton/>
        </div>
    </div>
    </Suspense>
</Animation>
</>
    );
}