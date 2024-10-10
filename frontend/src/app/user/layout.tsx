import type { Metadata } from "next";
import "@/app/globals.css";
import { Archivo } from 'next/font/google';

import UserNavbar from "@/app/components/user/userNavbar";
import UserFooter from "@/app/components/user/userFooter";

// Specify font variants (weights, styles, etc.)
const archivo = Archivo({
  subsets: ['latin'],   // You can specify the subset if needed
  weight: ['400', '700'],  // Define the font weights you plan to use
});


export const metadata: Metadata = {
  title: "Garage",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={archivo.className}>

        <UserNavbar />
        {children}
        <UserFooter />

      </body>
  </html>
  );
}
