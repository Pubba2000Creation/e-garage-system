import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import type { MenuProps } from 'antd';
import { Dropdown,  } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link  href="">
          Dashboard
        </Link>
      ),
    },
    {
     key: '2',
     label: (
     <Link  href="">
       Profile
     </Link>
      ),
    },
    {
        key: '4',
        danger: true,
        label: (
            <Link  href="">
              Logout
            </Link>
         ),
},
            
  ];
  
const User_profile_btn: React.FC = () => (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        
             <FaUserCircle size={30} className='text-black cursor-pointer border-2 rounded-full hover:border-orange-400'/>                  
       
      </a>
    </Dropdown>
  );
  
export default User_profile_btn;


