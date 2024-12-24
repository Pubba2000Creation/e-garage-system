import type { Metadata } from 'next'
import '@/app/globals.css'
import { Archivo } from 'next/font/google'
import ServiceProviderNavbar from '@/components/service-provider/dashboard-navbar'

// Specify font variants (weights, styles, etc.)
const archivo = Archivo({
  subsets: ['latin'], // You can specify the subset if needed
  weight: ['400', '700'], // Define the font weights you plan to use
})

export const metadata: Metadata = {
  title: 'Garage | Dashboard',
  description: 'A user-friendly garage system',
}

export default function ServiceProviderLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} px-2 md:px-5 lg:px-5 mx-auto`}>
        <ServiceProviderNavbar>{children}</ServiceProviderNavbar>
      </body>
    </html>
  )
}
