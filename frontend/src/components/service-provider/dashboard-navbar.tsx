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
import UserProfile from '@/components/service-provider/service-provider-profile'
import user_profile from '@/public/users/pic.png'

import user_icon from '@/public/icons/profile.svg'
import star_icon from '@/public/icons/star.svg'
import bell_icon from '@/public/icons/bell.svg'
import logout_icon from '@/public/icons/logout.svg'
import gear_icon from '@/public/icons/gear.svg'
import analytics_icon from '@/public/icons/analytics.svg'
import mangement_icon from '@/public/icons/mange-services.svg'
import { ServiceProviderNavbarProps } from '@/types/service-provider-components'

export default function ServiceProviderNavbar({
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
                <Link className="flex gap-2" href="/service-provider/analytics">
                  <Image
                    src={analytics_icon}
                    alt="logo"
                    width={15}
                    height={15}
                  />
                  Analytics
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/service-provider/manage-service">
                  <Image
                    src={mangement_icon}
                    alt="logo"
                    width={15}
                    height={15}
                  />
                  Manage Services
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/service-provider/reviews">
                  <Image src={star_icon} alt="logo" width={15} height={15} />
                  Reviews
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/service-provider/profile">
                  <Image src={user_icon} alt="logo" width={15} height={15} />
                  Profile
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/service-provider/notifications">
                  <Image src={bell_icon} alt="logo" width={15} height={15} />
                  Notifications
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2" href="/service-provider/account">
                  <Image src={gear_icon} alt="logo" width={15} height={15} />
                  Account
                </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className=" mt-10 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Link className="flex gap-2 hover:text-red-500" href="/">
                  <Image src={logout_icon} alt="logo" width={15} height={15} />
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
            <UserProfile profile_pic={user_profile} />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
