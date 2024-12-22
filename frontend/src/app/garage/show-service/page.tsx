
import ShowServicePage from '@/components/user/showServicePage'
import React from 'react'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Garage | Services',
}

export default function Service() {
  return (
    <>
      <ShowServicePage
        shopName={'jkhakjgh'}
        starCount={5}
        reviewCount={10}
        description={'giughaeiguhr;gauhg;ireaugha;iughiu'}
        address={'Matara Bus Stand'}
        phoneNumber={'+94705140790'}
        whatsappNumber={'+94705140790'}
        mapLink={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.784959916098!2d80.49264122449588!3d6.024229443961198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae140545e2e557d%3A0xea5ab096854971eb!2sTelijjawila!5e0!3m2!1sen!2slk!4v1734507988687!5m2!1sen!2slk'}
        allReviewsCount={10}
        servicesTagNames={['fhaihrig', 'argrgrg', 'etertae']}
        SpecialServices={['fhaihrig', 'argrgrg', 'etertae']}
      />
    </>
  )
}

