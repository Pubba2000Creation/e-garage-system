// app/user/service/Footer.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/user/logo'
import google_play from '@/public/images/Mobile App Store Badges.svg'
import app_store from '@/public/images/Mobile App Store Badges_2.svg'

const year: number = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-4">
      <div className=" px-2 md:px-10 lg:px-20 mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Logo and description */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <Logo />
            <p className="pt-5 text-gray text-sm">
              Lorem ipsum dolor sit amet consectetur. Bibendum consequat laoreet
              turpis in pellentesque sem id ut. Feugiat quam porttitor in augue
              sed quis pellentesque quam purus. Ac euismod ac proin vitae
              vulputate. Urna facilisis varius vestibulum at gravida turpis.
              Viverra imperdiet convallis elementum sed mauris. Ultricies in
              morbi eu felis nibh tellus.
            </p>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/6 mb-8 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray text-sm">
              <li>
                <Link href="/user/home">Home</Link>
              </li>
              <li>
                <Link href="/user/home">Find Services</Link>
              </li>
              <li>
                <Link href="/user/news">News</Link>
              </li>
              <li>
                <Link href="/user/aboutus">About Us</Link>
              </li>
              <li>
                <Link href="/user/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Top Searches */}
          <div className="w-full md:w-1/6 mb-8 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">Top Searches</h3>
            <ul className="space-y-2 text-gray text-sm">
              <li>
                <Link href="/">Repair Shops</Link>
              </li>
              <li>
                <Link href="/">Spare Parts</Link>
              </li>
              <li>
                <Link href="/">Service Centers</Link>
              </li>
              <li>
                <Link href="/">Oil Changes</Link>
              </li>
            </ul>
          </div>

          {/* Download the App */}
          <div className="w-full md:w-1/4">
            <h3 className="font-semibold text-lg mb-4">Download the App</h3>
            <div className="  ">
              <Link href="#">
                <Image
                  src={google_play}
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                />
              </Link>
              <Link href="#">
                <Image
                  src={app_store}
                  alt="Download on the App Store"
                  width={180}
                  height={53}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-4">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm text-gray">
              &copy; {year} E-Garage All rights reserved.
            </p>
            <div className="space-x-4 text-sm text-gray">
              <Link href="#">Terms of Service</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
