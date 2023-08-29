'use client'
import Image from "next/image";
import React from "react";
import signIn from "../../utils/Google/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import { signInGoogle } from "../../utils/Google/firebase/auth/signin";
import Section from "@/components/section";

export default function SignInForm(){
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleSigninForm = async (event) => {
        event.preventDefault()
        const { result, error } = await signIn(email, password);
        if (error) {
            return (
              console.log(error)
            )
        }
        // else successful
        console.log(result)
        return (
          router.push('/dashboard')
        )
    }



    const item = {
        visible: { 
          opacity: 1,
          y: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: { 
          opacity: 0,
          y:-100,
          transition: {
            when: "afterChildren",
          },
        },
      }

    return(
    <Section>

        <h2 className="px-5 py-10 md:text-4xl">
            Sign In
            </h2>



            <form onSubmit={handleSigninForm} className="">
            <div className="flex flex-col pr-2 shadow-2xl">
                <label 
                htmlFor="email" 
                className="text-xl px-2 mr-auto relative">
                    Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="focus:outline-none focus:ring-2 ring-green-400 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="password" 
                className="text-xl px-2 relative">
                    Password</label>
                <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="focus:outline-none focus:ring-2 ring-green-400 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

              <div className="flex justify-center mx-auto py-5 z-50">
              <div className="hover:scale-105">
                <button className="" type="submit" >Sign in with Credentials</button>
                </div>
              </div>

            </form>
            </Section>
)
}

export function GoogleSigninButton(){
  const router = useRouter()
  const handleGoogleSignin = async (event) => {
    event.preventDefault()
    const { result, error } = await signInGoogle();
    if (error) {
        return console.log(error)
    }
    // else successful
    console.log(result)
    return router.push('/dashboard');
}
    return(
        <Section>
        <div className="flex justify-center mx-auto py-5 z-50">
        <div className="hover:scale-105">
<button className="flex content-center items-center gap-3" type="button" onClick={handleGoogleSignin}>
    <div className="relative w-[30px] h-[30px]">
    <Image
    src="/icons/google_signin_buttons/web/vector/btn_google_light_normal_ios.svg" alt="Google Logo" width={20} height={20}
    /></div>
    Sign in With Google
</button>
</div>
</div>
</Section>
    )
}