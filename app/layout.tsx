import 'server-only'
import './globals.css'
import {GABody} from '../utils/Google/analytics/google-analytics'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from './footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AuthContextProvider } from '../utils/context/AuthContext'
import LoginButton from '@/components/login'
config.autoAddCss = false
library.add(fas, faFontAwesome)

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SayHeySounds',
    template: '%s | SayHeySounds',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
        <body className="relative mx-auto overscroll-auto no-scrollbar text-black dark:text-white">
          <GABody/>
            <AuthContextProvider>
                <Nav><LoginButton/></Nav>
                <main className="relative min-w-screen mx-auto pt-20">
                    {children}
                </main>
            </AuthContextProvider>
            <Footer/>
      </body>
    </html>
  )
}
