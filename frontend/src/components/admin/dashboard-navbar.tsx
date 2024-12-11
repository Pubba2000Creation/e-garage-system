'use client'
// import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  // SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  // useSidebar,
} from '@/components/ui/sidebar'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/components/user/logo'
import NotificationsDrawer from '@/components/user/notifications-drawer'
import AdminProfile from '@/components/admin/admin-profile'

import user_profile from '@/public/users/pic.png'
import user_icon from '@/public/icons/profile.svg'
import star_icon from '@/public/icons/star.svg'
import bell_icon from '@/public/icons/bell.svg'
import logout_icon from '@/public/icons/logout.svg'
import gear_icon from '@/public/icons/gear.svg'
import analytics_icon from '@/public/icons/analytics.svg'
import mangement_icon from '@/public/icons/mange-services.svg'

import { PiGarage } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { SlUser } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { IoLogInOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { LuBellRing } from "react-icons/lu";

import { ServiceProviderNavbarProps } from '@/types/service-provider-components'

export default function AdminNavbar({
  children,
}: ServiceProviderNavbarProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <div className="flex justify-center items-center">
                  <Logo />
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/admin/dashboard">
                  <RxDashboard size={18} />
                  Dashboard
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/admin/news">
                <IoNewspaperOutline size={18} />
                  News
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/admin/services">
                  <PiGarage size={18} />
                  Services
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/admin/service-providers">
                  <RiUserStarLine size={18} />
                  Service providers
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/admin/users">
                  <HiOutlineUsers size={18} />
                  Users
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/admin/profile">
                  <CgProfile size={18} />
                  Profile
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/admin/notifications">
                  <LuBellRing size={18}  />
                  Notifications
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/admin/account">
                  <GoGear size={18} />
                  Account
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className=" mt-10 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2 hover:text-red-500" href="/">
                  <IoLogInOutline size={18} />
                  Logout
                </Link>
              </SidebarMenuButton>

            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div></div>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 justify-between gap-2 border px-4">
          <SidebarTrigger size="icon" className="my-auto " />
          {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
          <div className="flex items-end space-x-4 my-auto">
            <NotificationsDrawer count={8} />
            <AdminProfile profile_pic={user_profile} />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
