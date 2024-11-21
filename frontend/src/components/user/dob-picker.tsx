// DobPicker.tsx
import React from 'react'
import { ConfigProvider, DatePicker, DatePickerProps } from 'antd'
import { theme } from 'antd' // Import the theme object
import { DobPickerProps } from '@/types/user-components' // Import the type

const themeConfig = {
  algorithm: theme.defaultAlgorithm, // Use the default algorithm
  token: {
    colorPrimary: 'black', // Change the primary color
    colorPrimaryHover: 'black', // Change the hover color for primary elements
    todayColor: 'black', // Color of today's date
    controlOutline: '#99A3A3', // Focus border color (outline color)
    controlOutlineWidth: 1, // Outline width when focused
  },
  components: {
    DatePicker: {
      colorPrimary: '', // Primary color for the DatePicker
      colorPrimaryHover: '', // Hover color of the input
      controlOutline: '#99A3A3', // Border color when focused
      controlOutlineWidth: 0.5, // Focus outline thickness
      todayColorHover: '#FF991F', // Hover color for today's date
      boxShadow: '', // Optional focus box-shadow effect
    },
  },
}

export default function DobPicker({ onDateChange }: DobPickerProps) {
  const onChange: DatePickerProps['onChange'] = (date) => {
    if (date) {
      const dateString = date.format('YYYY-MM-DD') // Format the date string
      console.log('Selected Date:', dateString)
      if (onDateChange) {
        onDateChange(dateString) // Call the passed function with the formatted date
      }
    }
  }

  return (
    <ConfigProvider theme={themeConfig}>
      <DatePicker
        onChange={onChange}
        style={{ width: '100%', height: '65%' }}
        size="large"
      />
    </ConfigProvider>
  )
}
