import { TimeBagerProps } from '@/types/user-components'
import React from 'react'

export default function TimeBadge(props: TimeBagerProps) {
  return (
    <>
      <p className=" text-center text-sm text-white bg-primary rounded-md px-2 py-1 w-fit my-0 ">
        {props.time} ago
      </p>
    </>
  )
}
