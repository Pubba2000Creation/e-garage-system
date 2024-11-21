// app/user/service/tooltips.tsx
import React from 'react'
import { Tooltip } from 'antd'
import { TooltipsProps } from '@/types/user-components'

export default function Tooltips({
  placement,
  title,
  children,
}: TooltipsProps) {
  return (
    <Tooltip placement={placement} title={title}>
      {children}
    </Tooltip>
  )
}
