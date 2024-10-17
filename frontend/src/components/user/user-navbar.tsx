"use client"

import { useState } from "react"
import Link from "next/link"
import {  Menu  } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "@/components/user/logo"

import Btn from '@/components/user/btn';
import Border_btn from '@/components/user/border-btn';
import UserProfile from '@/components/user/user-profile';
import NotificationsDrawer from '@/components/user/notifications-drawer';
import user_profile from '@/public/users/pic.jpg';
import Tooltips from '@/components/user/tooltips';

export default function Navbar() {
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
    <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
      <div className="lg:hidden">
        <Sheet  open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="bg-white" asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white" side="left">
            <SheetHeader>
              <SheetTitle className="text-center">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-4">
              <Link className="text-sm font-semibold text-black focus:text-primary" href="/user/home" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link className="text-sm font-semibold text-black focus:text-primary" href="/user/home" onClick={() => setIsOpen(false)}>
                Find Services
              </Link>
              <Link className="text-sm font-semibold text-black focus:text-primary" href="/user/news" onClick={() => setIsOpen(false)}>
                News
              </Link>
              <Link className="text-sm font-semibold text-black focus:text-primary" href="/user/aboutus" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link className="text-sm font-semibold text-black focus:text-primary" href="/user/contactus" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="hidden lg:flex lg:items-center lg:space-x-6">
        <Link className="text-sm  text-black font-semibold hover:scale-105 transition duration-100 focus:text-primary hover:text-primary" href="/user/home">
          Home
        </Link>
        <Link className="text-sm  text-black font-semibold hover:scale-105 transition duration-100 focus:text-primary hover:text-primary" href="/user/home">
          Find Services
        </Link>
        <Link className="text-sm  text-black font-semibold hover:scale-105 transition duration-100 focus:text-primary hover:text-primary" href="/user/news">
          News
        </Link>
        <Link className="text-sm  text-black font-semibold hover:scale-105 transition duration-100 focus:text-primary hover:text-primary" href="/user/aboutus">
          About Us
        </Link>
        <Link className="text-sm  text-black font-semibold hover:scale-105 transition duration-100 focus:text-primary hover:text-primary" href="/user/contactus">
          Contact Us
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <Logo />
      </div>
      <div className="flex items-center space-x-4">

        <Tooltips placement="bottom" title="Become a Service Provider">
          <Btn name="+ Add a Service" fun={add_services} />
          </Tooltips>

        {isloging && (
            <div className="flex items-center space-x-4 my-1">
              <NotificationsDrawer count={8} />
              <UserProfile profile_pic={user_profile} />
            </div>
        )}
        {!isloging && <Border_btn name="Login" fun={login} />}        
              
      </div>
    </nav>
  )
}