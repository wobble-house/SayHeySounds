import 'server-only'
import './globals.css'
import {GABody} from '../utils/Google/analytics/google-analytics'
import type { Metadata } from 'next'
import Footer from './footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AuthContextProvider } from '../utils/context/AuthContext'
import { Rubik } from 'next/font/google'

config.autoAddCss = false
library.add(fas, faFontAwesome)

export const metadata: Metadata = {
  title: {
    default: 'SayHeySounds',
    template: '%s | SayHeySounds',
  },
}
 
const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className="relative mx-auto no-scrollbar text-black dark:text-white ">
          <GABody/>
          <AuthContextProvider>    
            <main className={` mx-auto min-h-screen ${rubik.className} w-full snap-y`}>
              {children}
            </main>
          </AuthContextProvider>
          <Footer/>
        </body>
      </html>
  )
}
