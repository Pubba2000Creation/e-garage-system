"use client";
import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import Logo from './logo';
import Border_btn from './border_btn';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Btn from './btn';
import UserProfile from './userProfile';
import NotificationsDrawer from './notificationsDrawer';

import user_profile from '@/public/users/pic.jpg';

export default function UserNavbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isloging, setIsloging] = useState(false);

  function login() {
    console.log('click login');
    setIsloging(true);
  }

  function add_services() {
    console.log('click add services');
  }

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Links (hidden on small screens) */}
            <div className="hidden md:flex space-x-8">
              <Link href="/user/home" className='cursor-pointer font-semibold hover:scale-105 transition duration-100 hover:text-primary'>Home</Link>
              <Link href="/user/home" className='cursor-pointer font-semibold hover:scale-105 transition duration-100 hover:text-primary'>Find Services</Link>
              <Link href="/user/news" className='cursor-pointer font-semibold hover:scale-105 transition duration-100 hover:text-primary'>News</Link>
              <Link href="/user/about_us" className='cursor-pointer font-semibold hover:scale-105 transition duration-100 hover:text-primary'>About Us</Link>
              <Link href="/user/contact_us" className='cursor-pointer font-semibold hover:scale-105 transition duration-100 hover:text-primary'>Contact Us</Link>
            </div>

            {/* Buttons (hidden on small screens) */}
            <div className="hidden md:flex items-center space-x-4">
              <Btn name="+ Add a Service" fun={add_services} />
              {isloging && (
                <div className='flex items-center space-x-4 my-1'>
                  <NotificationsDrawer count={8} />
                  <UserProfile profile_pic={user_profile} />
                </div>
              )}
              {!isloging && (
                <Border_btn name="Login" fun={login} />
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              {isloging && (
                <div className='flex items-center space-x-4 my-1 mr-3'>
                  <NotificationsDrawer count={8} />
                  <UserProfile profile_pic={user_profile} />
                </div>
              )}
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
              <Link href="/user/news" className='cursor-pointer' onClick={() => setIsOpen(false)}>News</Link>
              <Link href="/user/about_us" className='cursor-pointer' onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/user/contact_us" className='cursor-pointer' onClick={() => setIsOpen(false)}>Contact Us</Link>
              <Btn name="+ Add a Service" fun={add_services} />
              {!isloging && (
                <Border_btn name="Login" fun={login} />
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
