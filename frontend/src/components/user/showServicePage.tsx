// app/user/service/service-component.tsx
'use client'

import React from 'react'
import { Star } from 'lucide-react'
import ImageCarousel from '@/components/user/image-carousel'
import { CiLocationOn, CiPhone } from 'react-icons/ci'
import { IoLogoWhatsapp } from 'react-icons/io'

import user from '@/public/users/pic.jpg'

import carousel_1 from '@/public/images/carousel_1.jpg'
import carousel_2 from '@/public/images/carousel_2.jpg'
import carousel_3 from '@/public/images/carousel_3.jpg'

import Tag from '@/components/user/tag'
import Border_btn from '@/components/user/border-btn'
import Btn from '@/components/user/btn'
import AddReview from '@/components/user/addReview'
import CustomDropdown from '@/components/user/custom-dropdown-menu'
import ReviewCard from '@/components/user/review-card'
import SimilarServicesSection from '@/components/user/similar-services-section'
import { ServiceProps } from '@/app/types/user-components' // Import the type

const filterOptions: string[] = [
  'new',
  'old',
  'this week',
  'this month',
  'this year',
]

export default function ShowServicePage(props: ServiceProps) {
  const handleFilterChange = (selectedOption: string) => {
    console.log('Selected filter:', selectedOption)
  }

  const imageSet1 = [
    carousel_1,
    carousel_2,
    carousel_3,
    carousel_1,
    carousel_2,
    carousel_3,
  ]

  return (
    <section id="service_section">
      <ImageCarousel images={imageSet1} />
      {/* Rest of your component JSX remains the same */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center gap-1 mb-0">
              <div>
                <h2 className="text-2xl font-bold text-center">
                  {props.shopName}
                </h2>

                <div className="flex items-center mb-0">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium flex">
                    <span>{props.starCount}</span>
                    <span className="ml-1">({props.reviewCount})</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {props.servicesTagNames.map((service, index) => (
                <Tag key={index} tag={service} />
              ))}
            </div>

            <h2 className="font-semibold text-lg mb-2">Description</h2>
            <p className="text-gray-600 mb-6">{props.description}</p>

            <h2 className="font-semibold text-lg mb-2">Special Service for:</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {props.SpecialServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <section id="reviews_section">
              <div className="grid my-5 place-items-center">
                <AddReview />
              </div>
              <div className="flex justify-between">
                <h3 className="font-semibold text-lg my-1">
                  {props.allReviewsCount} Reviews
                </h3>
                <CustomDropdown
                  options={filterOptions}
                  onSelect={handleFilterChange}
                />
              </div>

              <div className="flex flex-col">
                <ReviewCard
                  Name={'John Doe'}
                  Img={user}
                  rating={5}
                  review={'This is a great service. I highly recommend it!'}
                  time={'2 days'}
                />
                <ReviewCard
                  Name={'John Doe'}
                  Img={user}
                  rating={5}
                  review={'This is a great service. I highly recommend it!'}
                  time={'2 days'}
                />
                <ReviewCard
                  Name={'John Doe'}
                  Img={user}
                  rating={5}
                  review={'This is a great service. I highly recommend it!'}
                  time={'2 days'}
                />
              </div>
            </section>

            <div className="grid my-5 place-items-center">
              <Border_btn name={'Show More'} fun={() => {}} />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  src={props.mapLink}
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-md"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <h2 className="font-semibold text-lg mt-10 mb-3">Business Info</h2>
            <ul className="text-gray">
              <li className="flex gap-2 my-2">
                <span className="py-1">
                  <CiLocationOn />
                </span>{' '}
                Address: {props.address}
              </li>
              <li className="flex gap-2 my-2">
                <span className="py-1">
                  <CiPhone />
                </span>{' '}
                Phone: {props.phoneNumber}
              </li>
              <li className="flex gap-2 my-2">
                <span className="py-1 text-whatapp">
                  <IoLogoWhatsapp />
                </span>{' '}
                WhatsApp: {props.whatsappNumber}
              </li>
            </ul>

            <div className="flex justify-between mt-5">
              <Btn name="Call Us" fun={() => console.log('Call Us')} />
              <Border_btn
                name="Locate Us"
                fun={() => console.log('Locate Us')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Similar Services */}
      <div className="mt-8">
        <SimilarServicesSection />
      </div>
    </section>
  )
}
