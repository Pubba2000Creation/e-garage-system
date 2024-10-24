import React from 'react'

export default function TimeBadge(props:{time:string}) {
  return (
    <>
        <p className=" text-center text-sm text-white bg-primary rounded-md px-2 py-1 w-fit my-2 ">{props.time} ago</p>
    </>
  )
}
