import Link from 'next/link';
import React from 'react'
const year = new Date().getFullYear();

export default function UserDashboardFooter() {
  return (
    <>
      <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-gray text-sm">
              
              <p>Copyright © {year} E-Garage All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/" className="hover:underline">Terms of Service</Link>
                <Link href="/" className="hover:underline">Privacy Policy</Link>
              </div>
    </div>
    </>
  )
}
