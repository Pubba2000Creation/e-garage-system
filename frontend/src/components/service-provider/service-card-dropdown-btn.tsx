import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import Link from 'next/link'
import { BsThreeDots } from "react-icons/bs";
// import {  Eye, Edit, Pause, Trash } from 'lucide-react'
import { DeleteAlertBox } from '@/components/service-provider/delete-alert-box';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 
      <Link href="" className='flex'>
      {/* <Eye className="mr-2 h-4 w-4 my-auto" /> */}
      <span className='text-xs'>Preview</span>
      </Link>,
  },
  {
    key: '2',
    label: 
    <Link href="" className='flex'>
    {/* <Edit className="mr-2 h-4 w-4 my-auto" /> */}
    <span className='text-xs'>Edit</span>     
    </Link>,
  },
  {
    key: '3',
    label: 
    <Link href="" className='flex'>
    {/* <Pause className="mr-2 h-4 w-4 my-auto" /> */}
    <span className='text-xs'>Pause</span>
    </Link>,
  },
  {
    key: '4',
    danger: true,
    label:<DeleteAlertBox/>,

    // <Link href="/" className='flex'>
    //   <Trash className="mr-2 h-4 w-4 my-auto" />
    //   Delete
    // </Link>,
  },
]

export default function ServiceCardDropdownBtn() {
  return (
    <Dropdown menu={{ items }} >
      <Link href=""  onClick={(e) => e.preventDefault()}>
        <button  type="button"><BsThreeDots size={15} /></button>
      </Link>
    </Dropdown>
  )
}
