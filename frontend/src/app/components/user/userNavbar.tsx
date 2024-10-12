"use client";

import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import Logo from './logo';
import Border_btn from './border_btn';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Btn from './btn';
import Notification_btn from './notification_btn';
import User_profile_btn from './user_profile_btn';


export default function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function login() {
    console.log('click login');
  }

  function add_services() {
    console.log('click add services');
  }

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Links (hidden on small screens) */}
            <div className="hidden md:flex space-x-8">

              <Link href="/" className='cursor-pointer font-semibold hover:scale-105 transition duration-100  hover:text-primary'>Home</Link>
              <Link href="/" className='cursor-pointer font-semibold hover:scale-105 transition duration-100  hover:text-primary'>Find Services</Link>
              <Link href="/" className='cursor-pointer font-semibold hover:scale-105 transition duration-100  hover:text-primary'>News</Link>
              <Link href="/" className='cursor-pointer font-semibold hover:scale-105 transition duration-100  hover:text-primary'>About Us</Link>
              <Link href="/" className='cursor-pointer font-semibold hover:scale-105 transition duration-100  hover:text-primary'>Contact Us</Link>
            </div>

            <div className='flex space-x-4'>
              <Notification_btn />
              <User_profile_btn />
            </div>

            {/* Buttons (hidden on small screens) */}
            <div className="hidden md:flex space-x-4">
              
              <Border_btn name="Login" fun={login} />
              <Btn name="+ Add a Service" fun={add_services} />
            </div>



            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoMdClose className="h-6 w-6" /> : <IoMdMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col justify-items-start space-y-4 py-2">

              <Link href="/" className='cursor-pointer' onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/" className='cursor-pointer' onClick={() => setIsOpen(false)}>Find Services</Link>
              <Link href="/" className='cursor-pointer' onClick={() => setIsOpen(false)}>News</Link>
              <Link href="/" className='cursor-pointer' onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/" className='cursor-pointer' onClick={() => setIsOpen(false)}>Contact Us</Link>

              <Border_btn name="Login" fun={login} />
              <Btn name="+ Add a Service" fun={add_services} />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
