
import React from 'react'

import CategorySection from '@/components/user/category-section'
import  HeroSectionComponent  from '@/components/user/hero-section'
import TopRatedServicesSection from '@/components/user/top-rated-services-section'
import BanerSection from '@/components/user/baner-section'
import FeaturedServicesPromotions from '@/components/user/featured-services-promotions'
import NewsAlertSection from '@/components/user/news-alert-section'
import BottomSection from '@/components/user/bottom-section'


export default function UserHomePage() {
  return (
    <>

      <HeroSectionComponent />
      <CategorySection />
      <TopRatedServicesSection />
      <BanerSection />
      <FeaturedServicesPromotions />
      <NewsAlertSection />
      <BottomSection />

    </>
      
  )
}
