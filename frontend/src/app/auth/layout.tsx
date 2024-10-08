import type { Metadata } from "next";
import "@/app/globals.css";
import { Archivo } from 'next/font/google';

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
      <body
        className={archivo.className}
      >
        <div className="container md:px-10">
          {children}
        </div>
        
      </body>
    </html>
  );
}
