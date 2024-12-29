
import '@/app/globals.css'
import { Archivo } from 'next/font/google'
import UserNavbar from '@/components/user/user-navbar'
import UserFooter from '@/components/user/user-footer'
import type { Metadata } from 'next'

// Specify font variants (weights, styles, etc.)
const archivo = Archivo({
  subsets: ['latin'], // You can specify the subset if needed
  weight: ['400', '700'], // Define the font weights you plan to use
})

export const metadata: Metadata = {
  title: 'Garage',
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} `}>
        <UserNavbar />
        <section className='px-2 md:px-10 lg:px-20 mx-auto'>
            {children}
        </section>      
        <UserFooter />
      </body>
    </html>
  )
}
