import React from 'react'

export default function StatusBage(props:{type:string}) {
  return (
    <>
      <div 
        className= {`border mx-2 my-0 px-2 py-1 rounded 
        ${props.type === 'Active' ? ' border-2 border-green-200 bg-green-100 text-green-500' : ''} 
        ${props.type === 'Paused' ? 'border-yellow-300 bg-yellow-100 text-yellow-500' : ''}
        ${props.type === 'Pending' ? 'border-gray bg-light_gray text-gray' : ''}`}>
        <p className='text-center text-xs'>{props.type}</p>
      </div>
    </>
  )
}
