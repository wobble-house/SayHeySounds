import { Header } from '@/components/section'
import Image from 'next/image'
import { Animation } from '@/utils/animation/animation'

export const metadata = {
  title: 'Home',
  description: 'Sign Up to learn more about SayHeySounds',
}

export default function Home() {
  return (
    <>
    <Animation mode={'wait'} initial={'false'}>
   <Header>
    <div className="flex flex-col items-center mx-auto pb-12">
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
    </Animation>
    </>
  )
}
