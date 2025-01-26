import React from 'react'

export default function AuthBtn(props:{name:string, fun:() => void,fill:boolean})  {   
  return (
    <>
         <button type="button" onClick={props.fun} className={`w-8 h-8 m-2 rounded-full border  ${props.fill ? 'bg-primary ' : 'border-primary'}`}>{props.name}</button>     
    </>
  )
}
