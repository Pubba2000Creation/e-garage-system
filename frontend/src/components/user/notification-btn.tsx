// Notification_btn.tsx
import React from 'react';
import { Badge } from 'antd';
import { IoNotificationsOutline } from "react-icons/io5";
import { NotificationBtnProps } from '@/app/types/user-components'; // Import the type

export default function Notification_btn(props: NotificationBtnProps) {
  return (
    <button type="button" onClick={props.fun} className='transition duration-300 ease-in-out transform hover:scale-110'>
      <Badge count={props.count} className='mt-2'>
        <IoNotificationsOutline size={23} className='text-gray cursor-pointer hover:text-primary' />
      </Badge>
    </button>
  );
};
