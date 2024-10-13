import React from 'react'
import Logo from './logo'
import Image from 'next/image';
import Link from 'next/link';

import app_store from '@/public/images/Mobile App Store Badges.svg';
import play_store from '@/public/images/Mobile App Store Badges_2.svg';
const year = new Date().getFullYear();


export default function UserFooter() {
  return (
    <>
          <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  {/* Add your Logo component here */}
                   <Logo />
                  <span className="text-lg font-bold"></span>
                </div>
                <p className="text-gray">
                  Lorem ipsum dolor sit amet consectetur. Bibendum consequat laoreet turpis in pellentesque sem id ut.
                </p>
              </div>

              {/* Useful Links */}
              <div>
                <h4 className="font-bold mb-4">Useful Links</h4>
                <ul className="  space-y-2">
                  <li><Link href="/user/home" className="text-gray ">Home</Link></li>
                  <li><Link href="/user/home" className="text-gray ">Find Services</Link></li>
                  <li><Link href="/user/news" className="text-gray ">News</Link></li>
                  <li><Link href="/user/about_us" className="text-gray ">About Us</Link></li>
                  <li><Link href="/user/contact_us" className="text-gray ">Contact Us</Link></li>
                </ul>
              </div>

              {/* Top Searches */}
              <div>
                <h4 className="font-bold mb-4">Top Searches</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray">Repair Shops</Link></li>
                  <li><Link href="/" className="text-gray">Spare Parts</Link></li>
                  <li><Link href="/" className="text-gray">Service Centers</Link></li>
                  <li><Link href="/" className="text-gray">Oil Changes</Link></li>
                </ul>
              </div>

              {/* Download App */}
              <div>
                <h4 className="font-bold mb-4">Download the App</h4>
                <div className="flex space-x-4  justify-center">

                  <Link href="#">
                    <Image src={app_store} alt="Google Play" className="h-12" />
                  </Link>

                  <Link href="#">
                    <Image src={play_store} alt="App Store" className="h-12" />
                  </Link>

                </div>
              </div>
            </div>
            
            {/* Copyright and Links */}
            <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-gray text-sm">
              
              <p>Copyright © {year} E-Garage All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/" className="hover:underline">Terms of Service</Link>
                <Link href="/" className="hover:underline">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>

    </>
    
  )
}


