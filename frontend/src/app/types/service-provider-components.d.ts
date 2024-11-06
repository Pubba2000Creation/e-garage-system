//////////////////////// ServiceProviderNavbarProps

export interface ServiceProviderNavbarProps {
  children: React.ReactNode
}

//////////////////////// ServiceProviderProfileProps

import { StaticImageData } from 'next/image'

export interface ServiceProviderProps {
  profile_pic?: string | StaticImageData // Allows both string and StaticImageData types
}
