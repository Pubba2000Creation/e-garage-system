'use client'

import { useState } from 'react' // Import useState  from 'react'
import SmBtn from '@/components/user/sm-btn'
import Image from 'next/image'
import user from '@/public/users/pic.png'
import ServiceOptions from '@/components/admin/service-options'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { IoSearchOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

export default function Promotions() {
  const router = useRouter()
  const [selectedPage, setSelectedPage] = useState('')
  const [search, setSearch] = useState('')

  function handleButtonClick(page_name: string) {
    setSelectedPage('')
    setSelectedPage(page_name)
    console.log(selectedPage)
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    console.log(search)
  }

  type serviceDate = {
    id: string
    image: string
    title: string
    description: string
    rating: string
    Categories: string[]
    vehicles: string[]
    phoneNo: string
    whatsAppNo: string
    address: string
    province: string
    district: string
    mapLink: string

  }

  const serviceDate: serviceDate[] = [
    {
      id: '1',
      image: '/users/pic.png',
      title: 'Garage',
      description: 'Lorem ipsum dolor erat volutpat. ',
      rating: '4.5',
      Categories: ['Car', 'Bike', 'Truck'],
      vehicles: ['Car', 'Bike', 'Truck'],
      phoneNo: '0771234567',
      whatsAppNo: '0771234567',
      address: 'Lorem ipsum volutpat. ',
      province: 'Colombo',
      district: 'Colombo',
      mapLink: 'https://www.google.com/maps/@-6.9000000,79.9000000,12z',

    },
  ]

  return (
    <div className="">
      <div className="flex md:justify-between gap-10 mb-3">
        <div className="flex gap-4">
          <div>
            <p className="text-lg font-semibold md:text-2xl">Promotions</p>
            <p className="text-sm">{serviceDate.length} results found</p>
          </div>
          <Button
            onClick={() => router.push('/admin/add-new-service')}
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded my-auto"
          >
            Add service 
          </Button>
        </div>
        <div className="flex gap-2 my-auto">
          <Input
            type="text"
            className="border-light-gray w-60 focus:border-primary focus:ring-white"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
          <Button
            variant="outline"
            className="border-light-gray  focus:border-primary focus:ring-white"
            type="submit"
          >
            <IoSearchOutline />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        {/* Table Wrapper with Responsive Height */}
        <div className="overflow-auto h-[73vh] ">
          <table className="table-auto w-full border-collapse">
            {/* Table Header */}
            <thead className="bg-white sticky top-0 z-20">
              <tr className="text-center">
                <th className="border px-4 py-2 max-w-fit">#</th>
                <th className="border px-4 py-2 max-w-fit">Service Title</th>               
                <th className="border px-4 py-2  max-w-fit">Rating</th>
                <th className="border px-4 py-2  max-w-fit">Service Categories</th>
                <th className="border px-4 py-2  max-w-fit">Target Vehicles</th>
                <th className="border px-4 py-2  max-w-fit">Phone No</th>
                <th className="border px-4 py-2  max-w-fit">What App No</th>
                <th className="border px-4 py-2  max-w-fit">Address</th>
                <th className="border px-4 py-2  max-w-fit">Province</th>
                <th className="border px-4 py-2  max-w-fit">District</th>
                <th className="border px-4 py-2  max-w-fit">Options</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {serviceDate.map((row) => (
                <tr key={row.id} className="odd:bg-light_gray text-center even:bg-white">
                  <td className="border px-2 py-1">{row.id}</td>
                  <td className="border px-2 py-1">
                    <div>{row.title}</div>
                  </td>
                  <td className="border px-2 py-1">
                    <div>{row.rating}</div>
                  </td>
                  <td className="border px-2 py-1">{row.Categories}</td>
                  <td className="border px-2 py-1">{row.vehicles}</td>
                  <td className="border px-2 py-1">{row.phoneNo}</td>
                  <td className="border px-2 py-1">{row.whatsAppNo}</td>
                  <td className="border px-2 py-1">{row.address}</td>
                  <td className="border px-2 py-1">{row.province}</td>
                  <td className="border px-2 py-1">{row.district}</td>                  
                  <td className="border px-2 py-1">
                    <ServiceOptions />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-start my-2">
        <form className="flex justify-center gap-0.5">
          <SmBtn
            type="button"
            fun={() => {
              handleButtonClick('Previous')
            }}
            name={'Previous'}
          />
          <SmBtn
            type="button"
            fun={() => {
              handleButtonClick('1')
            }}
            name={'1'}
          />
          <SmBtn
            type="button"
            fun={() => {
              handleButtonClick('2')
            }}
            name={'2'}
          />
          <SmBtn
            type="button"
            fun={() => {
              handleButtonClick('3')
            }}
            name={'3'}
          />
          <SmBtn
            type="button"
            fun={() => {
              handleButtonClick('...')
            }}
            name={'...'}
          />
          <SmBtn
            type="button"
            fun={() => {
              handleButtonClick('Next')
            }}
            name={'Next'}
          />
        </form>
      </div>
    </div>
  )
}
