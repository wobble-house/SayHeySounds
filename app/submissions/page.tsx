import {Header} from "@/components/section"
import { Animation } from "@/utils/animation/animation"

export const metadata = {
  title: 'Submissions',
  description: 'Sign Up to learn more about SayHeySounds',
}
export default function Submissions() {
  return (
    <>
    <Animation mode={'wait'} initial={'false'}>
    <div className="relative flex min-h-screen flex-col items-center justify-between">
<Header>
<h2 className="text-center text-3xl font-black hover:scale-105">Artist Submissions</h2>
</Header>
    </div>
    </Animation>
    </>
  )
}
