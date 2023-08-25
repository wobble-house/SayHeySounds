import "server-only"
import { Header } from "@/components/section"
import { Animation } from "@/utils/animation/animation"
import Nav from "@/components/nav"
import LoginButton from "@/components/login"

export const metadata = {
  title: 'About Us',
  description: 'Sign Up to learn more about SayHeySounds',
}
export default function AboutUs() {
  return (
  <>
  <Nav><LoginButton/></Nav>
    <Animation mode={'wait'} initial={'false'}>
      
    <Header>
    <div className="relative flex min-h-screen flex-col items-center justify-between mt-20">

<h2 className="text-center text-3xl font-black hover:scale-105 max-w-2xl">
SayHeySounds is a comprehensive music production company operating across 
prominent hubs in NY, LA, and MI. Our forte lies in One Stop sync licensing,
 facilitated by our meticulously curated boutique library sourced from independent 
 producers and songwriters spanning the globe. A significant number of our talented 
 producers and writers boast personal studios, readily available for tailor-made 
 projects to meet your unique needs.</h2>

    </div>
    </Header>
    </Animation>
    </>
  )
}
