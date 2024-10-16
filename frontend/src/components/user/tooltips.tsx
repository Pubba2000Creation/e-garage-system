import React from 'react';
import { Tooltip } from 'antd';

interface TooltipsProps {
  placement: "top" | "left" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | undefined;
  title: string;
  children: React.ReactNode; // Accept children as a prop
}

export default function Tooltips({ placement, title, children }: TooltipsProps) {
  return (
    <Tooltip placement={placement} title={title}>
      {children} {/* This will display the child element inside the Tooltip */}
    </Tooltip>
  );
}
