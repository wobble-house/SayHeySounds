import "server-only"
import Section, { Header } from '@/components/section'
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
          <Header>
            <div className="flex flex-col items-center mx-auto pb-12 mt-20 min-h-screen">
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
          </Header>
        </Suspense>
      </Animation>
    </>
  )
}
