import ShowNews from '@/components/user/show-news'
import NewsSection from '@/components/user/news-section'
import hot_news from '@/public/images/carousel_1.jpg'

export default function ShowNewspage() {
  return (
    <>
      <ShowNews
        news_image={hot_news}
        image_alt={'news'}
        news_title={
          ' Drivers of Change: A new trend in the automotive industry - a talent in the automotive industry.'
        }
        news_description={
          'A returning name with a completely new format and approach, Drivers of Change is a sibling event to Autocar’s Great Women initiative, which celebrates the automotive industry as a place that welcomes everybody. '
        }
      />

      <NewsSection />
    </>
  )
}
