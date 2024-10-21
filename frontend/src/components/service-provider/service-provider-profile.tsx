import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData for type checking

// Import a default image if necessary
import default_profile_pic from '@/public/users/default_profile_pic.svg'; // Ensure it's a valid imported image

const items: MenuProps['items'] = [
  
  {
    key: '1',
    label: <Link href="/service-provider/analytics">Dashboard</Link>,
  },
  {
    key: '2',
    label: <Link href="/service-provider/profile">Profile</Link>,
  },
  {
    key: '3',
    danger: true,
    label: <Link href="/">Logout</Link>,
  },
];

interface ServiceProviderProps {
  profile_pic?: string | StaticImageData; // Allow both string and StaticImageData types
}

export default function ServiceProviderProfile({ profile_pic }: ServiceProviderProps) {
  return (
    <Dropdown menu={{ items }}>
      <Link href='' onClick={(e) => e.preventDefault()}>
        <div className="w-10 h-10 relative"> {/* Wrapper div with fixed size */}
          <Image
            src={profile_pic || default_profile_pic} // Use imported default image if no profile_pic is provided
            alt="User profile"
            fill
            className="border-2 rounded-full hover:border-primary cursor-pointer object-cover transition duration-300 ease-in-out transform hover:scale-105" 
          />
        </div>
      </Link>
    </Dropdown>
  );
}
