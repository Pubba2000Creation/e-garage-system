
import React from 'react'
import type { Metadata } from 'next'
import CategorySection from '@/components/user/category-section'
import HeroSectionComponent from '@/components/user/hero-section'
import TopRatedServicesSection from '@/components/user/top-rated-services-section'
import BanerSection from '@/components/user/baner-section'
import FeaturedServicesPromotions from '@/components/user/featured-services-promotions'
import NewsAlertSection from '@/components/user/news-section'
import BottomSection from '@/components/user/bottom-section'

export const metadata: Metadata = {
  title: 'Gearge | Home',
}

export default function UserHomePage() {
  return (
    <>

      <HeroSectionComponent />
      <CategorySection />
      <FeaturedServicesPromotions />
      <TopRatedServicesSection />
      <BanerSection />
      <NewsAlertSection />
      <BottomSection />
    </>
  )
}
