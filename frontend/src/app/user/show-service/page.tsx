
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
        mapLink={'yfyrdyrdrdkyrdkyrdrdkt'} 
        allReviewsCount={10} 
        servicesTagNames={['fhaihrig','argrgrg','etertae']} 
        SpecialServices={['fhaihrig','argrgrg','etertae']} 
         
      />

    </>
  )
}
