import "server-only"
import { Header } from "@/components/section"
import { Animation } from "@/utils/animation/animation"
import Nav from "@/components/nav"
import LoginButton from "@/components/login"

export const metadata = {
  title: 'Contact Us',
  description: 'Sign Up to learn more about SayHeySounds',
}
export default function ContactUs(){
  return (
    <>
    <Nav><LoginButton/></Nav>
<Animation mode={'wait'} initial={'false'}>
    <div className="relative flex min-h-screen flex-col items-center justify-between mt-20">
    <Header>
<h2 className="text-center text-3xl font-black hover:scale-105">Contact Us</h2>
</Header>
    </div>
</Animation>
</>
  )
};
