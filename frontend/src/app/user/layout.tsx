"use client"

// import type { Metadata } from 'next';
import '@/app/globals.css';
import { Archivo } from 'next/font/google';
import { usePathname } from 'next/navigation'; // Import usePathname
import { useEffect, useState } from 'react';
import UserNavbar from '@/components/user/user-navbar';
import UserFooter from '@/components/user/user-footer';

// Specify font variants (weights, styles, etc.)
const archivo = Archivo({
  subsets: ['latin'], // You can specify the subset if needed
  weight: ['400', '700'], // Define the font weights you plan to use
});

// export const metadata: Metadata = {
//   title: 'Garage',
//   description: 'A user-friendly garage system',
// };

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current path
  const [isClient, setIsClient] = useState(false); // Check if it's client-side
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hideFooter, setHideFooter] = useState(false); // Track if we need to hide the footer

  // Run the path detection on client-side only
  useEffect(() => {
    setIsClient(true);
    // Check if the pathname includes '/dashboard' to hide the footer on dashboard pages
    setHideFooter(pathname.includes('/user/dashboard'));
  }, [pathname]);

  if (!isClient) {
    return <div></div>; // Return an empty div or a minimal valid structure
  }
  

  return (
    <html lang="en">
      <body className={`${archivo.className} px-2 md:px-10 lg:px-20 mx-auto`}>
        {/* Always show the navbar */}
        <UserNavbar />
        
        {/* Render the main content */}
        {children}
        
        {/* Conditionally render the footer */}
        {!hideFooter && <UserFooter />}       
      </body>
    </html>
  );
}
