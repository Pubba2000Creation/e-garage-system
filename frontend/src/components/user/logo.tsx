import React from 'react';
import logo from '@/public/logo/logo&name.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className='cursor-pointer'>
      <Image src={logo} 
        alt="logo" 
        width={100} 
        height={100} 
      />
    </Link>
  );
}
