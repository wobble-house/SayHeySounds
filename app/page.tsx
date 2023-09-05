import "server-only"
import Section, { Header, SectionSwap2 } from '@/components/section'
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
          <SectionSwap2/> 
        </Suspense>
      </Animation>
    </>
  )
}
