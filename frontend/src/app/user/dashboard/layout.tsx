import type { Metadata } from "next";
import "@/app/globals.css";
import { Archivo } from 'next/font/google';
import UserDashboardTopAndSideNavbar from "@/app/components/user/userDashboardTopAndSideNavbar";
import UserDashboardFooter from "@/app/components/user/userDashboardFooter";

// Specify font variants (weights, styles, etc.)
const archivo = Archivo({
  subsets: ['latin'],   // You can specify the subset if needed
  weight: ['400', '700'],  // Define the font weights you plan to use
});

export const metadata: Metadata = {
  title: "Garage",
  description: "A user-friendly garage system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  // Declare children prop
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <div className=" px-2 md:px-10 lg:px-20 mx-auto">
          {/* Include the Navbar and pass children between the Navbar and Footer */}
          <UserDashboardTopAndSideNavbar>
            {/* Render the passed children here */}
            {children}
          </UserDashboardTopAndSideNavbar>

          {/* Footer Component */}
          <UserDashboardFooter />
        </div>        
      </body>
    </html>
  );
}
