'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Account() {
  const router = useRouter()
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
      className='max-w-4xl p-6 '    
    >
      <h1 className=" text-lg font-semibold md:text-2xl mb-8 ">Account</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 '>
        <div className=''>
          <p>Change Password</p>
          <p className='mt-1 text-sm text-gray'>Your password must be at least 8 characters long</p>
        </div>

        <div className='grid gap-2 '>          
          <Input 
            type="password" 
            className="border-gray focus:border-primary focus:ring-white" 
            placeholder="Enter Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)} 
          />
          <Input 
            type="password" 
            className="border-gray focus:border-primary focus:ring-white" 
            placeholder="Enter New Password" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)} 
          />
          <Input 
            type="password" 
            className="border-gray focus:border-primary focus:ring-white" 
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

          <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary_hover">Change Password</button>         
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <div>
          <p>Become a Service Owner</p>
          <p className='mt-1 text-sm text-gray'>Your can become service Owner</p>
        </div>
        <div className='my-auto '>
          <button 
            onClick={() => router.push('/auth/sign-up')}
            className='w-full border font-normal text-sm cursor-pointer border-primary text-primary hover:bg-primary hover:text-white  py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none' 
            type="button">
            Become a Service Owner
          </button>          
        </div>
      </div>      
    </form>
    
  </>
  )
}

