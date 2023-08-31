import "server-only";
import Section, {Header} from "@/components/section"
import { Animation } from "@/utils/animation/animation"
import SubmitBrief from "./submissions"
import Nav from "@/components/nav";
import LoginButton from "@/components/login";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata = {
  title: 'Submissions',
  description: 'Sign Up to learn more about SayHeySounds',
}
export default function Submissions() {
  return (
    <>
    <LoginButton/>
    <Animation mode={'wait'} initial={'false'}>
    <Suspense fallback={<Loading/>}>
    <div className="relative flex min-h-screen flex-col items-center mt-20">
<Header>
<h2 className="text-center text-3xl font-black hover:scale-105">Artist Submissions</h2>
</Header>
  <SubmitBrief/>
    </div>
    </Suspense>
    </Animation>
    </>
  )
}
