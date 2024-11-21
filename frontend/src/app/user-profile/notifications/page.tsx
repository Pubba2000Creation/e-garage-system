'use client'
import React from 'react'
import { Switch } from "@/components/ui/switch"

export default function Notifications() {
  const [onAllUpdates, setOnAllUpdates] = React.useState(true)
  const [onAllAlerts, setOnAllAlerts] = React.useState(true)

  // Handle form submission (you can process the data here)
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    console.log("Updates Notifications:", onAllUpdates)
    console.log("Alerts Notifications:", onAllAlerts)
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        className='max-w-4xl p-6 bg-white rounded-lg shadow-md'
      >
        
        <h1 className=" text-lg font-semibold md:text-2xl mb-8 ">Notification Settings</h1>

        <div className='mb-5 w-2/5'>
          <div className='flex justify-between'>
            <p>Turn on all update notifications</p>
            <Switch
              checked={onAllUpdates} // Bind the state
              onCheckedChange={setOnAllUpdates} // Update the state
            />
          </div>
          <p className='mt-2 text-sm text-gray'>Lorem ipsum dolor sit amet consectetur. Ullamcorper pretium phasellus.</p>
        </div>

        <div className='mb-5 w-2/5'>
          <div className='flex justify-between'>
            <p>Turn on all alerts notifications</p>
            <Switch  
              checked={onAllAlerts} // Bind the state
              onCheckedChange={setOnAllAlerts} // Update the state
            />
          </div>
          <p className='mt-2 text-sm text-gray' >Lorem ipsum dolor sit amet consectetur. Ullamcorper pretium phasellus.</p>
        </div>
      </form>    
    </>
  )
}
