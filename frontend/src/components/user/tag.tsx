// app/user/service/tag.tsx
import React from 'react'
import { TagProps } from '@/types/user-components'

export default function Tag(props: TagProps) {
  const { tag = 'SPECIAL DISCOUNTS' } = props // Set default value
  return (
    <p className="text-center text-sm text-white bg-primary rounded-md px-2 py-1 w-fit my-2">
      {tag}
    </p>
  )
}
