// CustomDropdown.tsx

import React, { useState, useEffect, useRef } from 'react';
import {CustomDropdownProps} from '@/app/types/user-components.d';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function CustomDropdown ({ options, onSelect }:CustomDropdownProps)  {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option); // Notify parent component
    setIsOpen(false); // Close dropdown after selecting an option
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-light_gray shadow-sm px-2 py-2 bg-white text-sm font-extralight text-black hover:border-primary hover:text-primary focus:outline-none"
      >
        {selected || options[0] }
        <RiArrowDropDownLine size={19} />
      </button>

      {/* Options List */}
      {isOpen && (
        <div className="absolute mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="cursor-pointer px-4 py-1 text-xs text-gray  hover:text-primary"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


