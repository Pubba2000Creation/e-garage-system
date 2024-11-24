'use client'

import PublishedServiceCard from '@/components/service-provider/published-service-card'
import React from 'react'
import service_card_1 from '@/public/images/carousel_1.jpg'


export default function ManageServices() {
  const publish_service_count = 5 
  return (
    <>
      <h1 className="text-lg font-semibold md:text-2xl mb-1">Manage Services</h1>
      <div className='flex justify-between'>
        <div>
            <h3 className='block font-bold my-1'><span className=''>{publish_service_count}</span> Services Published </h3>
        </div>
        <div>
            <button 
            className='border text-sm border-primary bg-white text-primary  py-1.5 px-3  rounded-md hover:bg-primary hover:text-white transition duration-300 ease-in-out transform hover:scale-105'>
                + Add a Service
            </button>
        </div>
      </div>

      <div className=''>
        
      <PublishedServiceCard
          img={service_card_1.src}
          alt={'Wardhana Service Station'}
          title={'Wardhana Service Station'}
          address={'No.329/4 B High Level Rd, Maharagama'}
          description={'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam euismod ligula nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat. '}
          star_count={10}
          review_count={10}
          fun={() => { } } 
          status={'Active'}      
      />

      <PublishedServiceCard
          img={service_card_1.src}
          alt={'Wardhana Service Station'}
          title={'Wardhana Service Station'}
          address={'No.329/4 B High Level Rd, Maharagama'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam euismod ligula nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat. '
          }
          star_count={10}
          review_count={10}
          fun={() => {}}
          status={'Paused'} 
      />

      <PublishedServiceCard
          img={service_card_1.src}
          alt={'Wardhana Service Station'}
          title={'Wardhana Service Station'}
          address={'No.329/4 B High Level Rd, Maharagama'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam euismod ligula nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat. '
          }
          star_count={10}
          review_count={10}
          fun={() => {}}
          status={'Pending'} 
      />

      </div>


    </>
  )
}

