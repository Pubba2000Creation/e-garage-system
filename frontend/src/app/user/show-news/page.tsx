
import ShowNews from '@/components/user/show-news'
import NewsSection from '@/components/user/news-section'
import hot_news from '@/public/images/carousel_1.jpg'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Gearge | News',
}

export default function ShowNewspage() {

  return (
    <>

      <ShowNews
        news_image={hot_news}
        image_alt="news"
        news_title={'newsTitle'}
        news_description="A returning name with a completely new format and approach, Drivers of Change is a sibling event to Autocars Great Women initiative, which celebrates the automotive industry as a place that welcomes everybody."
      />

      <NewsSection />
    </>
  );
}
