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
          <div className="relative top=0 mx-auto">
        <div className="fixed flex-col items-center align-center justify-center mx-auto mt-20 min-h-screen h-full w-full z-50">
              <div className="relative w-96 mx-auto">
                <Image
                className="relative"
                  src="/logos/sayheysoundslogo.webp"
                  alt="SayHeySounds Logo"
                  width={1330}
                  height={1330}
                  priority
                />
              </div>
            </div>
            </div>
          <SectionSwap> 
            <div className="relative flex-col items-center mt-20 left-0 min-h-screen h-full w-full bg-[#687fcc] dark:bg-[#37446e]">
              <div className="flex place-items-center w-96">
                <Image
                  className="relative"
                  src="/logos/sayheysoundslogo.webp"
                  alt="SayHeySounds Logo"
                  width={1330}
                  height={1330}
                  priority
                />
              </div>
            </div>
            </SectionSwap>

        </Suspense>
      </Animation>
    </>
  )
}
