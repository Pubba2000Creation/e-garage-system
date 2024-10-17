'use client';
import React, { useState, useEffect } from 'react';
import Logo from '../user/logo';
import Btn from '../user/btn';
import UserProfile from '../user/user-profile';
import NotificationsDrawer from '../user/notifications-drawer';
import Link from 'next/link';

import { FaRegStar } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import { LiaHomeSolid } from 'react-icons/lia';
import { BiLogOut } from 'react-icons/bi';

import user_profile from '@/public/users/pic.jpg';

interface DashboardProps {
  children: React.ReactNode; // Accept children as a prop
}

export default function ServiceProviderDashboardTopAndSideNavbar({
  children,
}: DashboardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Analytics Dashboard');

  // Prevent background scrolling when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  function add_services() {
    console.log('click add services');
  }

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>
            {/* Buttons (hidden on small screens) */}
            <div className="flex items-center space-x-4">
              <Btn name="+ Add a Service" fun={add_services} />
              <div className="flex items-center space-x-4 my-1">
                <NotificationsDrawer count={8} />
                <UserProfile profile_pic={user_profile} />
                {/* Hamburger Menu */}
                <button
                  className="md:hidden p-4"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Navbar */}
      <div className="flex h-screen relative">
        {/* Sidebar */}
        <aside
          className={`fixed md:relative bg-gray-100 h-full w-64 z-50 transition-transform transform md:translate-x-0 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:block`}
        >
          <div className="p-6">
            <nav className="space-y-6">
              <p className="text-2xl font-extrabold text-left pb-3">{title}</p>

              <Link href="/" className="flex items-center space-x-3 ">
                <span
                  onClick={() => setTitle('Analytics Dashboard')}
                  className="flex items-center space-x-2 text-black transition duration-300 ease-in-out transform hover:scale-105 hover:text-primary "
                >
                  <FaRegStar />
                  <span className="font-semibold">Analytics</span>
                </span>
              </Link>

              <Link href="/" className="flex items-center space-x-3">
                <span
                  onClick={() => setTitle('Manage Your Services')}
                  className="flex items-center space-x-2 text-black transition duration-300 ease-in-out transform hover:scale-105 hover:text-primary hover:font-medium"
                >
                  <CgProfile />
                  <span className="font-semibold">Manage Services</span>
                </span>
              </Link>

              <Link href="/" className="flex items-center space-x-3">
                <span
                  onClick={() => setTitle('Manage Your Reviews')}
                  className="flex items-center space-x-2 text-black transition duration-300 ease-in-out transform hover:scale-105 hover:text-primary hover:font-medium"
                >
                  <IoNotificationsOutline />
                  <span className="font-semibold">Reviews</span>
                </span>
              </Link>

              <Link href="/" className="flex items-center space-x-3 ">
                <span
                  onClick={() => setTitle('Profile')}
                  className="flex items-center space-x-2 text-black transition duration-300 ease-in-out transform hover:scale-105 hover:text-primary hover:font-medium"
                >
                  <IoSettingsOutline />
                  <span className="font-semibold">Profile</span>
                </span>
              </Link>

              <Link href="/" className="flex items-center space-x-3 ">
                <span
                  onClick={() => setTitle('Notification Settings')}
                  className="flex items-center space-x-2 text-black transition duration-300 ease-in-out transform hover:scale-105 hover:text-primary hover:font-medium"
                >
                  <LiaHomeSolid />
                  <span className="font-semibold">Notifications</span>
                </span>
              </Link>

              <Link href="/" className="flex items-center space-x-3 ">
                <span
                  onClick={() => setTitle('Account Settings')}
                  className="flex items-center space-x-2 text-black transition duration-300 ease-in-out transform hover:scale-105 hover:text-primary hover:font-medium"
                >
                  <LiaHomeSolid />
                  <span className="font-semibold">Account</span>
                </span>
              </Link>

              <Link href="/" className="flex items-center space-x-3 pt-5">
                <span className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105 text-red-600 hover:text-red-700">
                  <BiLogOut />
                  <span className="font-semibold">Logout</span>
                </span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div
          className={`flex-1 p-8 transition-transform duration-300 ${
            isOpen ? 'translate-x-64 md:translate-x-0' : 'ml-0'
          }`}
        >
          {/* Render the children prop here */}
          {children}
        </div>

        {/* Overlay for small screens */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
}
