import React from 'react'
import ServicesCard from '@/components/user/services-card'

import card_image_1 from '@/public/images/services-card-1.svg'
import card_image_2 from '@/public/images/services-card-2.svg'
import card_image_3 from '@/public/images/services-card-3.svg'

export default function SimilarServicesSection() {
  function handleClickServiceCard(id: string) {
    console.log('id: ', id)
  }
  return (
    <section id="top-rated-section" className="my-20">
      <h2 className=" text-2xl font-bold text-left my-5 ">Similar Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServicesCard
          imageUrl={card_image_1.src}
          rating={4.8}
          reviewCount={16}
          title="New Liyanage Motors"
          address="27MW+J69, Mahvila road, Yatiyanthota 71700"
          fun={() => handleClickServiceCard('123')}
        />

        <ServicesCard
          imageUrl={card_image_2.src}
          rating={4.8}
          reviewCount={16}
          title="New Liyanage Motors"
          address="27MW+J69, Mahvila road, Yatiyanthota 71700"
          fun={() => handleClickServiceCard('123')}
        />

        <ServicesCard
          imageUrl={card_image_3.src}
          rating={4.8}
          reviewCount={16}
          title="New Liyanage Motors"
          address="27MW+J69, Mahvila road, Yatiyanthota 71700"
          fun={() => handleClickServiceCard('123')}
        />
      </div>
    </section>
  )
}
