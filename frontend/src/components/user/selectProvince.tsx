"use client"
import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const province = [
    { value: "Western Province", label: "Western Province" },
    { value: "Central Province", label: "Central Province" },
    { value: "Southern Province", label: "Southern Province" },
    { value: "Northern Province", label: "Northern Province" },
    { value: "Eastern Province", label: "Eastern Province" },
    { value: "North Western Province", label: "North Western Province" },
    { value: "North Central Province", label: "North Central Province" },
    { value: "Uva Province Province", label: "Uva Province Province" },
    { value: "Sabaragamuwa Province", label: "Sabaragamuwa Province" },
]

interface SelectProvinceComboboxProps {
  value: string;
  onChange: (value: string) => void;
}

export function SelectProvinceCombobox({
  value,
  onChange,
}: SelectProvinceComboboxProps) {

  const [open, setOpen] = React.useState(false)
  

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? province.find((province) => province.value === value)?.label
            : "Select province..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search province..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Province found.</CommandEmpty>
            <CommandGroup>
              {province.map((province) => (
                <CommandItem
                  key={province.value}
                  value={province.value}
                  onSelect={(currentValue: string) => {
                    onChange(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {province.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === province.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
