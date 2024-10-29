// CustomDropdown.tsx
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { CustomDropdownProps } from '@/app/types/user-components'

export default function CustomDropdown({ options, onSelect }: CustomDropdownProps) {
  const [selected, setSelected] = useState(options[0]) // Default to the first option

  const handleSelect = (option: string) => {
    setSelected(option)
    onSelect(option) // Trigger callback function with selected option
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="w-[130px] justify-between border-gray hover:border-primary/80 focus:border-primary focus-visible:ring-primary focus-visible:ring-offset-0"
        >
          {selected}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[130px]">
        {options.map((option) => (
          <DropdownMenuItem 
            key={option}
            onClick={() => handleSelect(option)}
            className="focus:bg-primary/10 focus:text-primary"
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
