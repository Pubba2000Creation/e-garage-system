import type { Metadata } from 'next'
import '@/app/globals.css'
import { Archivo } from 'next/font/google'

// Specify font variants (weights, styles, etc.)
const archivo = Archivo({
  subsets: ['latin'], // You can specify the subset if needed
  weight: ['400', '700'], // Define the font weights you plan to use
})

export const metadata: Metadata = {
  title: 'Garage | Forgot Password',
  description: 'A user-friendly garage system',
}

export default function ForgotPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} px-2 md:px-10 lg:px-20 mx-auto`}>
        {children}
      </body>
    </html>
  )
}
