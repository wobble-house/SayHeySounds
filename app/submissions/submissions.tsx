'use client'
import Image from "next/image";
import React from "react";
import signUp, { signUpGoogle } from "../../utils/Google/firebase/auth/signup"
import { useRouter } from 'next/navigation'
import Section from "@/components/section";

export default function SubmitBrief(){
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [companyName, setCompanyName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [genre, setGenre] = React.useState('')
    const [subgenre, setSubGenre] = React.useState('')
    const [projectName, setProjectName] = React.useState('')
    const [budget, setBudget] = React.useState('')
    const [creativeNotes, setCreativeNotes] = React.useState('')
    const [additionalNotes, setAdditionalNotes] = React.useState('')
    const data = {
      firstName,
      lastName,
      companyName,
      email,
      phone,
      description,
      genre,
      subgenre,
      projectName,
      budget,
      creativeNotes,
      additionalNotes
    }
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
    <Section>
                <div className="md:whitespace-nowrap relative">
                    <h2 className="md:text-4xl">
                    Submit Brief
                    </h2>
                </div>


            <form onSubmit={handleForm} className="max-w-[222px] mx-auto z-50">

            <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="First Name" 
                className="text-xl  relative">
                    First Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} 
                    required type="text" 
                    name="First Name" 
                    id="First Name" 
                    placeholder="Your First Name" 
                    className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="Last Name" 
                className="text-xl relative">
                    Last Name</label>
                <input onChange={(e) => setLastName(e.target.value)} 
                required type="text" 
                name="Last Name" 
                id="Last Name" 
                placeholder="Your Last Name" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="email" 
                className="text-xl relative">
                    Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} 
                    required type="email"
                    name="email" 
                    id="email" 
                    placeholder="example@mail.com" 
                    className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="Phone Number" 
                className="text-xl relative">
                    Phone Number</label>
                <input onChange={(e) => setPhone(e.target.value)} 
                required type="text" 
                name="Phone Number" 
                id="Phone Number" 
                placeholder="Google" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="Company Name" 
                className="text-xl relative">
                    Company Name</label>
                <input onChange={(e) => setCompanyName(e.target.value)} 
                required type="text" 
                name="Company Name" 
                id="Company Name" 
                placeholder="Google" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="Brief Description" 
                className="text-xl relative">
                    Brief Description of Musical Needs?</label>
                <input onChange={(e) => setDescription(e.target.value)} 
                required type="text" 
                name="Brief Description" 
                id="Brief Description" 
                placeholder="" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="Genre" 
                className="text-xl relative">
                    Genre</label>
                <input onChange={(e) => setGenre(e.target.value)} 
                required type="text" 
                name="Genre" 
                id="Genre" 
                placeholder="" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="Sub-Genre" 
                className="text-xl relative">
                    Sub-Genre</label>
                <input onChange={(e) => setSubGenre(e.target.value)} 
                required type="text" 
                name="Sub-Genre" 
                id="Sub-Genre" 
                placeholder="" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="Project Name" 
                className="text-xl relative">
                    {`Name of Project (Ad Campaign, Movie/Short Title, Series Title, Etc)`}</label>
                <input onChange={(e) => setProjectName(e.target.value)} 
                required type="text" 
                name="Project Name" 
                id="Project Name" 
                placeholder="" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="Budget" 
                className="text-xl relative">
                    Ideal Budget Range</label>
                <input onChange={(e) => setBudget(e.target.value)} 
                required type="text" 
                name="Budget" 
                id="Budget" 
                placeholder="" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="Creative Notes" 
                className="text-xl relative">
                    {`Creative Notes / Direction (lyrical)`}</label>
                <input onChange={(e) => setCreativeNotes(e.target.value)} 
                required type="text" 
                name="Creative Notes" 
                id="Creative Notes" 
                placeholder="" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="Additional Notes" 
                className="text-xl relative">
                    {`Additional Notes`}</label>
                <input onChange={(e) => setAdditionalNotes(e.target.value)} 
                required type="text" 
                name="Additional Notes" 
                id="Additional Notes" 
                placeholder="" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex flex-col shadow-2xl">
                <label 
                htmlFor="password" 
                className="text-xl relative">
                    Password</label>
                <input onChange={(e) => setPassword(e.target.value)} 
                required type="password" 
                name="password" 
                id="password" 
                placeholder="password" 
                className="focus:outline-none focus:ring-2 ring-green-500 font-light text-gray-500  dark:text-gray-100 "/>
                </div>

                <div className="flex justify-center mx-auto py-5 z-50">
                <button className="" type="submit" >Sign up</button>
              </div>
            </form>
            </Section>
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
      <Section>
      <div className="flex justify-center mx-auto py-5 z-50">
<button className="flex content-center items-center gap-3" type="button" onClick={handleGoogleSignup}>
  <div className="relative w-[30px] h-[30px]">
  <Image
  src="/icons/google_signin_buttons/web/vector/btn_google_light_normal_ios.svg" alt="Google Logo"
  width={20} height={20} /></div>
  Sign up With Google
</button>
</div>
</Section>
  )
}