'use client'
import React from 'react'
import { Switch } from "@/components/ui/switch"

export default function Notifications() {
  const [onAllUpdates, setOnAllUpdates] = React.useState(true)
  const [onAllAlerts, setOnAllAlerts] = React.useState(true)

  // Handle form submission (you can process the data here)
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    console.log( onAllUpdates, onAllAlerts)
    
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        className='max-w-4xl p-6 '
      >
        
        <h1 className=" text-lg font-semibold md:text-2xl mb-8 ">Notification Settings</h1>

        <div className='mb-5 w-full md:w-1/2'>
          <div className='flex justify-between'>
            <div>
              <p>Turn on all update notifications</p>
              <p className='mt-0 text-sm text-gray'>You will receive notifications for all updates</p>
            </div>
            
            <Switch
              className='my-auto' 
              checked={onAllUpdates} // Bind the state
              onCheckedChange={setOnAllUpdates} // Update the state
            />
          </div>         
        </div>

        <div className='mb-5 w-full md:w-1/2'>
          <div className='flex justify-between'>
            <div>
              <p>Turn on all alerts notifications</p>
              <p className='mt-0 text-sm text-gray' >You will receive alerts for all updates</p>
            </div>      
            <Switch 
              className='my-auto' 
              checked={onAllAlerts} // Bind the state
              onCheckedChange={setOnAllAlerts} // Update the state
            />
          </div>         
        </div>

      </form>    
    </>
  )
}
