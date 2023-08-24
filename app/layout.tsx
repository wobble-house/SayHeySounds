import 'server-only'
import './globals.css'
import { Animation } from '../utils/animation/animation'
import { GAScript, GABody} from '../utils/Google/analytics/google-analytics'
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
config.autoAddCss = false
library.add(fas, faFontAwesome)

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <GAScript/>
        <body className="relative mx-auto overscroll-auto no-scrollbar">
          <GABody/>
          <Animation mode={'wait'} initial={false}>
            <AuthContextProvider>
              
                <Nav/>
                <main className="relative min-w-screen mx-auto pt-24">
                    {children}
                </main>
              
            </AuthContextProvider>
            </Animation>
          <Footer/>
      </body>
    </html>
  )
}
