
import React from 'react';
import { Badge } from 'antd';
import { IoNotificationsOutline } from "react-icons/io5";

export default function Notification_btn(props:{fun:() => void, count:number;}) {
 return(

   <button type="button" onClick={props.fun} className='transition duration-300 ease-in-out transform hover:scale-110'>
        <Badge count={props.count} className='mt-2'>
            <IoNotificationsOutline size={23} className='text-gray cursor-pointer hover:text-primary' />
        </Badge>
    </button>
 );   
}; 


