'use client'
import Image from "next/image";
import React from "react";
import signUp, { signUpGoogle } from "../../utils/Google/firebase/auth/signup"
import { useRouter } from 'next/navigation'

export default function SignUpForm(){
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [companyName, setCompanyName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const data = {firstName,lastName,companyName,email}
    const router = useRouter()

    const handleForm = async (e) => {
        e.preventDefault();
        const { result, error } = await signUp({email, password, data});
        if (error) {
            return console.log(error)
        }
        // else successful
        console.log(result)
        return router.push('/');
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
    <section>
    <div className=" bg-rosspurple dark:bg-rossdarkpurple pb-2 pr-2 mt-20 pt-2 mb-20">
                <div className=" bg-rossblue dark:bg-rossdarkblue pb-2 pr-2 -ml-2 -mt-4 pt-4 md:whitespace-nowrap relative">
                    <h2 className=" bg-rosspurple dark:bg-rossdarkpurple -ml-2 -mt-8 px-5 mr-auto md:text-4xl text-white">
                    Sign Up
                    </h2>
                </div>
                </div>


            <form onSubmit={handleForm} className=" text-black dark:text-white max-w-[222px] mx-auto z-50">

            <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="First Name" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    First Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} required type="text" name="First Name" id="First Name" placeholder="Your First Name" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="Last Name" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Last Name</label>
                <input onChange={(e) => setLastName(e.target.value)} required type="text" name="Last Name" id="Last Name" placeholder="Your Last Name" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="Company Name" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Company Name</label>
                <input onChange={(e) => setCompanyName(e.target.value)} required type="text" name="Company Name" id="Company Name" placeholder="Google" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>
                
            <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-12 shadow-2xl">
                <label 
                htmlFor="email" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col bg-rosspurple dark:bg-rossdarkpurple pr-2 mb-5 shadow-2xl">
                <label 
                htmlFor="password" 
                className="text-xl bg-rosspurple dark:bg-rossdarkpurple px-2 mr-auto -ml-4 -mt-8 -mb-4 relative text-white">
                    Password</label>
                <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="bg-rossblue dark:bg-rossdarkblue  py-2 mb-2 pb-2 pl-4 pt-8 -ml-2 focus:outline-none focus:ring-2 ring-rossgreen font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex justify-center mx-auto py-5 z-50">
              <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-1 pt-1 ">
              <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-1 ">
                <button className=" text-white bg-rosspurple dark:bg-rossdarkpurple px-4 py-1 -ml-1 -mt-1" type="submit" >Sign up</button>
                </div>
                </div>
              </div>
            </form>
            </section>
)
}

export function GoogleSignupButton(){
  const router = useRouter()
  const handleGoogleSignup = async (event) => {
    event.preventDefault()
    const { result, error } = await signUpGoogle();
    if (error) {
        return console.log(error)
    }
    // else successful
    console.log(result)
    return router.push('/');
}
  return(
      <section>
      <div className="flex justify-center mx-auto py-5 z-50">
      <div className="bg-rosspurple dark:bg-rossdarkpurple pr-1 pb-1 mt-2 pt-1 hover:scale-105">
            <div className="bg-rossblue dark:bg-rossdarkblue pr-1 pb-1 -ml-1 -mt-2 pt-1">
<button className="flex content-center items-center gap-3 py-2 pl-2 pr-4 bg-rosspurple dark:bg-rossdarkpurple -mt-2 text-white " type="button" onClick={handleGoogleSignup}>
  <div className="relative w-[30px] h-[30px]">
  <Image
  src="/icons/google_signin_buttons/web/vector/btn_google_light_normal_ios.svg" alt="Google Logo"
  width={20} height={20} /></div>
  Sign up With Google
</button>
</div>
</div>
</div>
</section>
  )
}