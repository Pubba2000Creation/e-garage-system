'use client'
import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

// Import types
import { SelectServicesComboboxProps } from '@/types/user-components'
import { services } from '@/data/serviceOptions' // Adjust the path as needed

// Define the options for services
// const services: ServiceOption[] = [
//   { value: "Repair Shops", label: "Repair Shops" },
//   { value: "Spare Parts", label: "Spare Parts" },
//   { value: "Oil Changes", label: "Oil Changes" },
//   { value: "Vehicle Inspections", label: "Vehicle Inspections" },
//   { value: "Tire Services", label: "Tire Services" },
//   { value: "Service Centers", label: "Service Centers" },
// ];

export default function SelectServicesCombobox({
  value,
  onChange,
}: SelectServicesComboboxProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border focus:border-white border-white"
        >
          {value
            ? services.find((service) => service.value === value)?.label
            : 'Select Services...'}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white border border-primary text-black">
        <Command>
          <CommandInput placeholder="Search Services..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Service found..</CommandEmpty>
            <CommandGroup>
              {services.map((service) => (
                <CommandItem
                  key={service.value}
                  value={service.value}
                  onSelect={(currentValue: string) => {
                    onChange(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  {service.label}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === service.value ? 'opacity-100' : 'opacity-0'
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
