import React from 'react'

export default function SmBtn(props:{
    fun: () => void;
    name: string;
    type?: "button" | "reset" | "submit" | undefined;
    
}) {
  return (
    <>
      <button 
        className="py-1 px-2 text-xs border border-light_gray  bg-white hover:bg-light_gray rounded-md" 
        type={props.type} 
        onClick={() => {props.fun()}}  
        >
        {props.name}
      </button>
    </>
  )
}
