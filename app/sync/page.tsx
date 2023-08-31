import "server-only"
import { Animation } from "@/utils/animation/animation"
import { Header } from "@/components/section"
import Nav from "@/components/nav"
import LoginButton from "@/components/login"
import { Suspense } from "react"
import Loading from "../loading"

export const metadata = {
  title: 'Sync Licensing',
  description: 'Sign Up to learn more about SayHeySounds',
}

export default function Sync() {
  return (
    <>
    <LoginButton/>
    <Animation mode={'wait'} initial={'false'}>
    <Suspense fallback={<Loading/>}>
    <div className="relative flex min-h-screen flex-col items-center justify-between mt-20">
<Header>
<h2 className="text-center text-3xl font-black hover:scale-105">Sync Placements</h2>
</Header>
    </div>
    </Suspense>
    </Animation>
    </>
  )
}
