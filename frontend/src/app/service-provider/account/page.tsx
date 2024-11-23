'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { useEffect, useState } from 'react'

export default function Account() {

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('') // Clear the error after 3 seconds (3000 ms)        
      }, 3000)
      return () => clearTimeout(timer) // Cleanup the timer if the component unmounts or error changes
    }
  }, [error])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ currentPassword, newPassword, confirmPassword })
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Please enter all required fields')
      return
    }
  } 

  return( 
  <>  
    <form 
      onSubmit={handleSubmit}
      className='max-w-4xl  '    
    >
      <h1 className=" text-lg font-semibold md:text-2xl mb-8 ">Account</h1>

      <div className='flex '>
        <div className='w-2/5'>
          <p>Change Password</p>
          <p className='mt-1 text-sm text-gray'>Lorem ipsum dolor sit amet consectetur. Ullamcorper pretium phasellus.</p>
        </div>

        <div className=' space-y-2 w-3/5'>
          
          <Input 
            type="password" 
            className="border-light_gray focus:border-primary focus:ring-white" 
            placeholder="Enter Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)} 
          />
          <Input 
            type="password" 
            className="border-light_gray focus:border-primary focus:ring-white" 
            placeholder="Enter New Password" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)} 
          />
          <Input 
            type="password" 
            className="border-light_gray focus:border-primary focus:ring-white" 
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

          <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary_hover">Change Password</button>
          
        </div>
      </div>

      {/* <div className='mt-8 flex space-x-5 '>
        <div>
          <p>Become a Service Owner</p>
          <p className='mt-1 text-sm text-gray'>Lorem ipsum dolor sit amet consectetur. Ullamcorper pretium phasellus.</p>
        </div>
        <Border_btn name={'Become a Service Owner'} fun={() => { }} />
      </div>   */}

      {/* <div className='mt-8 flex '>    
      </div> */}
      
    </form>
    
  </>
  )
}

