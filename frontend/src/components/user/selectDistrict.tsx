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

const district = [
    {
      "value": "Colombo",
      "label": "Colombo District"
    },
    {
      "value": "Gampaha",
      "label": "Gampaha District"
    },
    {
      "value": "Kalutara",
      "label": "Kalutara District"
    },
    {
      "value": "Kandy",
      "label": "Kandy District"
    },
    {
      "value": "Matale",
      "label": "Matale District"
    },
    {
      "value": "Nuwara Eliya",
      "label": "Nuwara Eliya District"
    },
    {
      "value": "Galle",
      "label": "Galle District"
    },
    {
      "value": "Hambantota",
      "label": "Hambantota District"
    },
    {
      "value": "Matara",
      "label": "Matara District"
    },
    {
      "value": "Jaffna",
      "label": "Jaffna District"
    },
    {
      "value": "Kilinochchi",
      "label": "Kilinochchi District"
    },
    {
      "value": "Mannar",
      "label": "Mannar District"
    },
    {
      "value": "Mullaitivu",
      "label": "Mullaitivu District"
    },
    {
      "value": "Vavuniya",
      "label": "Vavuniya District"
    },
    {
      "value": "Ampara",
      "label": "Ampara District"
    },
    {
      "value": "Batticaloa",
      "label": "Batticaloa District"
    },
    {
      "value": "Trincomalee",
      "label": "Trincomalee District"
    },
    {
      "value": "Anuradhapura",
      "label": "Anuradhapura District"
    },
    {
      "value": "Polonnaruwa",
      "label": "Polonnaruwa District"
    },
    {
      "value": "Kurunegala",
      "label": "Kurunegala District"
    },
    {
      "value": "Puttalam",
      "label": "Puttalam District"
    },
    {
      "value": "Kegalle",
      "label": "Kegalle District"
    },
    {
      "value": "Ratnapura",
      "label": "Ratnapura District"
    },
    {
      "value": "Badulla",
      "label": "Badulla District"
    },
    {
      "value": "Monaragala",
      "label": "Monaragala District"
    }
  ]

  interface SelectDistrictComboboxProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  export function SelectDistrictCombobox({
    value,
    onChange,
  }: SelectDistrictComboboxProps) {
    const [open, setOpen] = React.useState(false);
  
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
              ? district.find((district) => district.value === value)?.label
              : "Select District..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search district..." className="h-9" />
            <CommandList>
              <CommandEmpty>No district found.</CommandEmpty>
              <CommandGroup>
                {district.map((district) => (
                  <CommandItem
                    key={district.value}
                    value={district.value}
                    onSelect={(currentValue: string) => {
                      onChange(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {district.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === district.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }  