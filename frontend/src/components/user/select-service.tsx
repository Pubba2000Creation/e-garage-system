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
    { value: "Repair Shops", label: "Repair Shops" },
    { value: "Spare Parts", label: "Spare Parts" },
    { value: "Oil Changes", label: "Oil Changes" },
    { value: "Vehicle Inspections", label: "Vehicle Inspections" },
    { value: "Tire Services", label: "Tire Services" },
    { value: "Service Centers", label: "Service Centers" },   
]

interface SelectsServicesComboboxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SelectServicesCombobox({
  value,
  onChange,
}: SelectsServicesComboboxProps) {

  const [open, setOpen] = React.useState(false)
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border focus:border-primary border-light_gray"
        >
          {value
            ? province.find((province) => province.value === value)?.label
            :  "Select Services..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white border border-primary text-black">
        <Command>
          <CommandInput placeholder="Search Services..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Service found..</CommandEmpty>
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
