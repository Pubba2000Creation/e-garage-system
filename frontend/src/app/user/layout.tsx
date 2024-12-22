import type { Metadata } from 'next'

import '@/app/globals.css'
import { Archivo } from 'next/font/google'
import UserProfileNavbar from '@/components/user/user-profile-navbar'

// Specify font variants (weights, styles, etc.)
const archivo = Archivo({
  subsets: ['latin'], // You can specify the subset if needed
  weight: ['400', '700'], // Define the font weights you plan to use
})

export const metadata: Metadata = {
  title: 'Garage | Profile',
  description: 'A user-friendly garage system',
}

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className}`}>        
        <section className='px-2 md:px-5 lg:px-5 mx-auto'>
            <UserProfileNavbar>{children}</UserProfileNavbar>
        </section>
      </body>
    </html> 
  )
}
