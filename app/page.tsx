import "server-only"
import Section, { Header, SectionSwap } from '@/components/section'
import Image from 'next/image'
import { Animation } from '@/utils/animation/animation'
import Nav from '@/components/nav'
import LoginButton from '@/components/login'
import { Suspense } from "react"
import Loading from "./loading"

export const metadata = {
  title: 'Home',
  description: 'Sign Up to learn more about SayHeySounds',
}

export default function Home() {
  return (
    <> 
    <LoginButton/>
      <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <Section> 
            <div className="flex mx-auto flex-col items-center min-h-screen h-full w-full justify-center bg-[#a6d7aa] dark:bg-[#4e6950]">
              <div className="flex flex-row mx-auto">
                <div className="flex place-items-center w-96 rounded-r-full dark:rounded-l-full dark:rounded-r-none overflow-hidden shadow-xl">
                  <Image
                    className="relative"
                    src="/images/studio.jpg"
                    alt="SayHeySounds Studio"
                    width={1330}
                    height={1330}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-5 justify-center mx-auto content-center w-96">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold uppercase text-center">Header Text</h2>
                    <h3 className="text-lg font-normal text-center">Sub Text</h3>
                  </div>
                  <button className="bg-transparent rounded-3xl border-solid border-2 shadow-xl border-black dark:border-white px-4 py-2 mx-auto">click me</button>
                </div>
                <div className="flex place-items-center w-96">
                  <Image
                    className="relative"
                    src="/logos/sayheysoundslogo.webp"
                    alt="SayHeySounds Studio"
                    width={1330}
                    height={1330}
                    priority
                  />
                </div>
              </div>
            </div>
            </Section>
            <Section> 
            <div className="flex mx-auto flex-col items-center min-h-screen h-full w-full justify-center bg-[#687fcc] dark:bg-[#37446e]">
            <div className="flex flex-row mx-auto">
                <div className="flex place-items-center w-96 rounded-r-full dark:rounded-l-full dark:rounded-r-none overflow-hidden shadow-xl">
                  <Image
                    className="relative"
                    src="/images/studio.jpg"
                    alt="SayHeySounds Studio"
                    width={1330}
                    height={1330}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-5 justify-center mx-auto content-center w-96">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold uppercase text-center">Header Text</h2>
                    <h3 className="text-lg font-normal text-center">Sub Text</h3>
                  </div>
                  <button className="bg-transparent rounded-3xl border-solid border-2 shadow-xl border-black dark:border-white px-4 py-2 mx-auto">click me</button>
                </div>
                <div className="flex place-items-center w-96">
                  <Image
                    className="relative"
                    src="/logos/sayheysoundslogo.webp"
                    alt="SayHeySounds Studio"
                    width={1330}
                    height={1330}
                    priority
                  />
                </div>
              </div>
            </div>
            </Section>
            <Section> 
            <div className="flex mx-auto flex-col items-center min-h-screen h-full w-full justify-center dark:bg-[#34001a] bg-[#a70054]">
            <div className="flex flex-row mx-auto">
                <div className="flex place-items-center w-96 rounded-r-full dark:rounded-l-full dark:rounded-r-none overflow-hidden shadow-xl">
                  <Image
                    className="relative"
                    src="/images/studio.jpg"
                    alt="SayHeySounds Studio"
                    width={1330}
                    height={1330}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-5 justify-center mx-auto content-center w-96">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold uppercase text-center">Header Text</h2>
                    <h3 className="text-lg font-normal text-center">Sub Text</h3>
                  </div>
                  <button className="bg-transparent rounded-3xl border-solid border-2 shadow-xl border-black dark:border-white px-4 py-2 mx-auto">click me</button>
                </div>
                <div className="flex place-items-center w-96">
                  <Image
                    className="relative"
                    src="/logos/sayheysoundslogo.webp"
                    alt="SayHeySounds Studio"
                    width={1330}
                    height={1330}
                    priority
                  />
                </div>
              </div>
            </div>
            </Section>
        </Suspense>
      </Animation>
    </>
  )
}
