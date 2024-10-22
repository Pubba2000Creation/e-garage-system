import React from 'react'
import Image from 'next/image';

export default function CategoryCards(props:{title:string; img:string; fun: () => void }) {
  return (
    <div 
        onClick={props.fun}
        className='flex hover:bg-light cursor-pointer bg-light_hover px-4 py-2 text-black  rounded-md justify-center items-center space-x-2'>
        <Image src={props.img} width={50} height={50} alt=""/>
        <p className='my-auto ml-3 font-semibold'>{props.title}</p>  
    </div>
  )
}
