import "server-only";
import Section, {Header} from "@/components/section"
import { Animation } from "@/utils/animation/animation"
import SubmitBrief from "./submissions"
import Nav from "@/components/nav";
import LoginButton from "@/components/login";

export const metadata = {
  title: 'Submissions',
  description: 'Sign Up to learn more about SayHeySounds',
}
export default function Submissions() {
  return (
    <>
    <Nav><LoginButton/></Nav>
    <Animation mode={'wait'} initial={'false'}>
    <div className="relative flex min-h-screen flex-col items-center justify-between mt-20">
<Header>
<h2 className="text-center text-3xl font-black hover:scale-105">Artist Submissions</h2>
</Header>
<Section>
  <SubmitBrief/>
</Section>
    </div>
    </Animation>
    </>
  )
}
