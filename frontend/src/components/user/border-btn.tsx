// Border_btn.tsx
'use client'

import React from 'react'
import { BorderBtnProps } from '@/types/user-components'

export default function Border_btn(props: BorderBtnProps) {
  return (
    <button
      type={props.type}
      onClick={props.fun}
      className="border font-normal text-sm cursor-pointer border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
    >
      {props.name}
    </button>
  )
}
