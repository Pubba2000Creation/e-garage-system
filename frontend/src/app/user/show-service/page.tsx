// interface servicePageProps {
//   params: Promise<{ id: string }>;
//   searchParams: Promise<{ foo: string }>;
//   // Other custom props
// }

// export default async function Page({ params, searchParams }: servicePageProps) {
//   const { id } = await params;
//   const { foo } = await searchParams;
//   return <div>User ID: {id}, Foo: {foo}</div>;
// }

import ShowServicePage from '@/components/user/showServicePage'
import React from 'react'

export default function Service() {
  return (
    <>
      <ShowServicePage
        shopName={'jkhakjgh'}
        starCount={5}
        reviewCount={10}
        description={'giughaeiguhr;gauhg;ireaugha;iughiu'}
        address={';iuhgaeiguhr;aiguhrgiuahg;iaurhg'}
        phoneNumber={'1234567890'}
        whatsappNumber={'1234567809'}
        mapLink={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.784959916098!2d80.49264122449588!3d6.024229443961198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae140545e2e557d%3A0xea5ab096854971eb!2sTelijjawila!5e0!3m2!1sen!2slk!4v1734507988687!5m2!1sen!2slk'}
        allReviewsCount={10}
        servicesTagNames={['fhaihrig', 'argrgrg', 'etertae']}
        SpecialServices={['fhaihrig', 'argrgrg', 'etertae']}
      />
    </>
  )
}

