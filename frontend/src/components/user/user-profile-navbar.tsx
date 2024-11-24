'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/user/logo'
import NotificationsDrawer from './notifications-drawer'
import UserProfile from './user-profile'
import user_profile from '@/public/users/pic.png'
import user_icon from '@/public/icons/profile.svg'
import star_icon from '@/public/icons/star.svg'
import bell_icon from '@/public/icons/bell.svg'
import logout_icon from '@/public/icons/logout.svg'
import gear_icon from '@/public/icons/gear.svg'
import { UserProfileNavbarProps } from '@/types/user-components'

export default function UserProfileNavbar({
  children,
}: UserProfileNavbarProps) {
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
              <Link className="flex gap-2 " href="/user-profile/profile">
                <SidebarMenuButton className="">
                  <Image
                    className=""
                    src={user_icon}
                    alt="logo"
                    width={15}
                    height={15}
                  />
                  Profile
                </SidebarMenuButton>
              </Link>

              <Link className="flex gap-2" href="/user-profile/reviews">
                <SidebarMenuButton className="">
                  <Image src={star_icon} alt="logo" width={15} height={15} />
                  Reviews
                </SidebarMenuButton>
              </Link>

              <Link className="flex gap-2" href="/user-profile/notifications">
                <SidebarMenuButton className="">
                  <Image src={bell_icon} alt="logo" width={15} height={15} />
                  Notifications
                </SidebarMenuButton>
              </Link>

              <Link className="flex gap-2" href="/user-profile/account">
                <SidebarMenuButton className="">
                  <Image src={gear_icon} alt="logo" width={15} height={15} />
                  Account
                </SidebarMenuButton>
              </Link>

              <Link className="flex gap-2 " href="/">
                <SidebarMenuButton className="focus:bg-error mt-10 ">
                  <Image src={logout_icon} alt="logo" width={15} height={15} />
                  Logout
                </SidebarMenuButton>
              </Link>
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
          <SidebarTrigger size="icon" className="my-auto" />
          <div className="flex items-end space-x-4 my-auto">
            <NotificationsDrawer count={8} />
            <UserProfile profile_pic={user_profile} />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 pt-3">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
