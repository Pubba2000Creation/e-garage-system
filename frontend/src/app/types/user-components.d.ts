///////////////////////// AddReview.types.ts

// export interface AddReviewProps {}
export type HandleSubmitEvent = React.FormEvent<HTMLFormElement>
export type TextareaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>

// Type for the StarRating component's props
export interface StarRatingProps {
  onRatingChange: (rating: number) => void
}

////////////////////////////////// AlertBox.types.ts

export type AlertBoxType = 'default' | 'error' | 'success' | 'info' | 'warning'

export interface AlertBoxProps {
  title: string
  description: string
  time: string
  type?: AlertBoxType
  href?: string
}

/////////////////////////////// ServiceBanner.types.ts
export interface ServiceBannerProps {
  title: string
  description: string
  buttonText: string
  imageUrl: string // or ImageSource if you're using a more specific type for images
  onButtonClick: () => void
}

////////////////////////////////// BorderBtn.types.ts

export interface BorderBtnProps {
  name: string
  fun: () => void
  type?: 'submit' | 'reset' | 'button'
}

////////////////////////////// button types.ts

export interface BtnProps {
  name: string
  fun: () => void
  type?: 'submit' | 'reset' | 'button'
}

///////////////////// CategoryCardsProps types.ts
export interface CategoryCardsProps {
  title: string
  img: string
  fun: () => void
}

//// //////////////////CustomDropdownProps types.ts
export interface CustomDropdownProps {
  options: string[] // Array of options passed as prop
  onSelect: (selectedOption: string) => void // Callback function to handle selected option
}

////////////////////////// DobPicker.types.ts
export interface DobPickerProps {
  onDateChange: (date: string) => void // Update to accept string
}

// FormsCoverImage.types.ts
export interface FormsCoverImageProps {
  coverImage: string
  alt: string
}

/////////////////////////////////// HeroSection.types.ts
// export interface HeroSectionComponentProps {
//     services: string;
//     selectedDistrict: string;
//     error: string;
//     setServices: React.Dispatch<React.SetStateAction<string>>;
//     setSelectedDistrict: React.Dispatch<React.SetStateAction<string>>;
//     setError: React.Dispatch<React.SetStateAction<string>>;
//   }

//////////////////////////////////// ImageCarouselProps
import { StaticImageData } from 'next/image'

export type ImageCarouselProps = {
  images: StaticImageData[] // Array of image paths
}

///////////////////////////////// NewsCardProps

export interface NewsCardProps {
  imageUrl: string
  title: string
  description: string // Corrected spelling from 'desctription' to 'description'
  onClick: () => void
  setHotNews?: boolean // Changed to boolean for better clarity
  time: string
}

/////////////////////////////////// NotificationBtnProps
export interface NotificationBtnProps {
  fun: () => void
  count: number
}

// ////////////////////////////////// NotificationsDrawerProps

export interface NotificationsDrawerProps {
  count: number
}

///////////////////////////////////// ReviewCard.types.ts
import { StaticImageData } from 'next/image'

export interface ReviewCardProps {
  Name: string
  Img?: StaticImageData
  rating: number
  review: string
  time: string
}

////////////////////////////////// SelectDistrictComboboxProps

export interface SelectDistrictComboboxProps {
  value: string
  onChange: (value: string) => void
}

///////////////////////////////// SelectDistrictComboboxProps

export interface SelectDistrictComboboxProps {
  value: string
  onChange: (value: string) => void
}

export interface Province {
  value: string
  label: string
}

/////////////////////// SelectServicesComboboxProps

export interface SelectServicesComboboxProps {
  value: string
  onChange: (value: string) => void
}

export interface ServiceOption {
  value: string
  label: string
}

//////////////////////////////////// SelectProvinceComboboxProps

export interface ServiceBannerProps {
  title: string
  description: string
  buttonText: string
  imageUrl: string
  onButtonClick?: () => void
}

////////////////////////////////////// ServicesCardProps

export interface ServicesCardProps {
  imageUrl: string
  rating: number
  reviewCount: number
  title: string
  address: string
  onClick: () => void
  setDiscount?: boolean // Changed to boolean for clarity
}

///////////////////////////////////// ServiceProps

export interface ServiceProps {
  shopName: string
  starCount: number
  reviewCount: number
  description: string
  address: string
  phoneNumber: string
  whatsappNumber: string
  mapLink: string
  allReviewsCount: number
  servicesTagNames: string[]
  SpecialServices: string[]
  filterOptions?: string[]
}

//////////////////////////////////// TagProps

export interface TagProps {
  tag?: string
}
//////////////////////////////////// TimeBagerProps
export interface TimeBagerProps {
  time: string
}

////////////////////////////////////TooltipsProps

export interface TooltipsProps {
  placement:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | undefined
  title: string
  children: React.ReactNode
}

///////////////////////////////////////NavbarProps

export type NavbarProps = {
  isOpen: boolean
  isloging: boolean
  login: () => void
  add_services: () => void
}

////////////////////////////////////////// UserProfileNavbarProps

import { ReactNode } from 'react'

// Define the type for UserProfileNavbar component props
export interface UserProfileNavbarProps {
  children: ReactNode
}

// Define types for other potential reusable components as needed
export interface SidebarMenuLinkProps {
  href: string
  iconSrc: string
  label: string
}

////////////////////////////////////// UserProfileProps

import { StaticImageData } from 'next/image'
import type { MenuProps } from 'antd'

// Define type for UserProfile component props
export interface UserProfileProps {
  profile_pic?: string | StaticImageData
}

// Define the menu items type if needed in other components
export type UserProfileMenuItems = MenuProps['items']

////////////////////////////////////// VehicleType

// Define each vehicle type
export interface VehicleType {
  id: string
  label: string
}

// Define props for the VehicleTypeSelector component
export interface VehicleTypeSelectorProps {
  selectedVehicles: string[]
  isOpen: boolean
  onSelectionChange: (selectedVehicles: string[]) => void
}

//////////////////////////////////// show news

export interface showNewsProps {
  news_image: string.src
  image_alt: string
  news_title: string
  news_description: string
}
