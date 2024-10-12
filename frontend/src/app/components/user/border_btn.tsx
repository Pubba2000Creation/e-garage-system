"use client";

import React from 'react'

export default function Border_btn(props:{name:string,fun:() => void , type?:"submit" | "reset" | "button" | undefined}) {
  return (
    <>

<button
  type={props.type}
  onClick={props.fun}
  className="border-2 font-normal cursor-pointer border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
>
  {props.name}
</button>

    </>
  )
}
