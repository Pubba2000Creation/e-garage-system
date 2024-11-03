import React from 'react';
import { Dropdown } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import default_profile_pic from '@/public/users/default_profile_pic.svg';
import { UserProfileProps, UserProfileMenuItems } from '@/app/types/user-components';

const items: UserProfileMenuItems = [
  {
    key: '1',
    label: <Link href="/user-profile/profile">Profile</Link>,
  },
  {
    key: '2',
    danger: true,
    label: <Link href="/">Logout</Link>,
  },
];

export default function UserProfile({ profile_pic }: UserProfileProps) {
  return (
    <Dropdown menu={{ items }}>
      <Link href='' onClick={(e) => e.preventDefault()}>
        <div className="w-10 h-10 relative">
          <Image
            src={profile_pic || default_profile_pic}
            alt="User profile"
            fill
            className="border-2 rounded-full hover:border-primary cursor-pointer object-cover transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </Link>
    </Dropdown>
  );
}
