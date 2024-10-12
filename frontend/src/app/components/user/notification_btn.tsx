
import React from 'react';
import { Badge } from 'antd';
import { IoNotifications } from "react-icons/io5";

const Notification_btn: React.FC = () => (
  
    <Badge count={5} className='mt-1'>
        <IoNotifications size={27} className='text-black cursor-pointer   hover:text-primary' />
    </Badge>
  
);

export default Notification_btn;