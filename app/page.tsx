import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
    </main>
  )
}
