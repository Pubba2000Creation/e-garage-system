// Btn.tsx
"use client";

import React from 'react'
import { BtnProps } from '@/app/types/user-components';

export default function Btn(props: BtnProps) {
  return (
    <button
      type={props.type}
      onClick={props.fun}
      className="bg-primary cursor-pointer text-sm text-white hover:bg-primary_hover px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
    >
      {props.name}
    </button>
  )
}
