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
  const color1 = "green"
  const color2 = "red"
  const color3 = "blue"
  return (
    <> 
    <LoginButton/>
      <Animation mode={'wait'} initial={false}>
        <Suspense fallback={<Loading/>}>
          <SectionSwap2 color={color1} title={`${color1} section`} subtitle={`this section begins as ${color1}`}/> 
          <SectionSwap2 color={color2} title={`${color2} section`} subtitle={`this section begins as ${color2}`}/> 
          <SectionSwap2 color={color3} title={`${color3} section`} subtitle={`this section begins as ${color3}`}/> 
        </Suspense>
      </Animation>
    </>
  )
}
