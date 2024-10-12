"use client";

import React from 'react'

export default function Btn(props:{name:string,fun:() => void , type?:"submit" | "reset" | "button" | undefined}) {
  return (
    <>

<button
  type={props.type}
  onClick={props.fun}
  className="bg-primary cursor-pointer font-normal text-white hover:bg-primary-hover  px-6 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
>
  {props.name}
</button>

    </>
  )
}
