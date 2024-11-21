'use client'

import React from 'react'
import ServiceBanner from '@/components/user/service-banner'
import baner_image from '@/public/images/baner_image.svg'

export default function BanerSection() {
  return (
    <section id="banner_section" className="my-5">
      <ServiceBanner
        title="Become a Top Service Provider Today!"
        description="Join our network of skilled professionals and grow your business. We provide the platform, you provide the expertise."
        buttonText="Join Now"
        imageUrl={baner_image}
        onButtonClick={() => console.log('Navigating to sign-up page')}
      />
    </section>
  )
}
