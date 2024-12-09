'use client'
import ReplyReviewCard from '@/components/service-provider/reply-review-card'
import CustomDropdown from '@/components/user/custom-dropdown-menu'
import React from 'react'
import user_profile from '@/public/users/pic.png'

export default function Reviews() {
  const reviewsCount = 3
  const filterOptions: string[] = [
    'Newest',
    'Oldest',
    
  ]
  
  const serviceOptions: string[] = [
    'test01',
    'test02', 
  ]

  const handleOptionsChange = (selectedOption: string) => {
    console.log('Selected Options:', selectedOption)
  }

  return (
    <>
        <h1 className="text-lg font-semibold md:text-2xl mb-4">Reviews</h1>
        <div className=' flex justify-between'>
          <div className='my-auto'>
            <h3 className='block font-bold'>{reviewsCount} Reviews</h3>
          </div>
          <div className='flex gap-2 '>
                <CustomDropdown
                  options={serviceOptions}
                  onSelect={handleOptionsChange}
                />
                <CustomDropdown
                  options={filterOptions}
                  onSelect={handleOptionsChange}
                />
          </div>
        </div>

        <div className=''>

          <ReplyReviewCard 
            Img={user_profile} 
            Name={'Hasitha'} 
            rating={3} 
            review={'eowhfweu  regiurhgr rgirhaih eaigheriugh  eriguheai jijh'} 
            time={'1 week'} 
          />

        <ReplyReviewCard 
            Img={user_profile} 
            Name={'Hasitha'} 
            rating={3} 
            review={'eowhfweu rgoirjg rgregr rg regiurhgr rgirhaih eaigheriugh  eriguheaigh jijh'} 
            time={'1 week'} 
          />

        </div>
    </>
  )
}
