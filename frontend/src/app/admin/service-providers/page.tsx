'use client'

import { useState } from 'react' // Import useState  from 'react'
import SmBtn from '@/components/user/sm-btn'
import Image from 'next/image'
import user from '@/public/users/pic.png'
import ServiceProviderOptions from '@/components/admin/service-provider-options'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { IoSearchOutline } from 'react-icons/io5'
import AddServiceProviderForm from '@/components/admin/add-service-provide-form'

export default function UserTable() {
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

  type userData = {
    id: string
    profile: string
    fName: string
    lName: string
    dob: string
    age: string
    company: string
    email: string
    phoneNo: string
    address: string
    province: string
    district: string
    password: string
  }

  const userData: userData[] = [
    {
      id: '1',
      profile: '',
      fName: 'hasitha',
      lName: 'dilshan',
      dob: '2000-01-01',
      age: '20',
      company: 'Company Name',
      email: 'UgYQ2@example.com',
      phoneNo: '0771234567',
      address: 'No. 123, Colombo, Sri Lanka',
      province: 'Colombo',
      district: 'Colombo',
      password: '123456',
    },
    {
      id: '2',
      profile: '',
      fName: 'hasitha',
      lName: 'dilshan',
      dob: '2000-01-01',
      age: '20',
      company: 'Company Name',
      email: 'UgYQ2@example.com',
      phoneNo: '0771234567',
      address: 'No. 123, Colombo, Sri Lanka',
      province: 'Colombo',
      district: 'Colombo',
      password: '123456',
    },
    {
      id: '3',
      profile: '',
      fName: 'hasitha',
      lName: 'dilshan',
      dob: '2000-01-01',
      age: '20',
      company: 'Company Name',
      email: 'UgYQ2@example.com',
      phoneNo: '0771234567',
      address: 'No. 123, Colombo, Sri Lanka',
      province: 'Colombo',
      district: 'Colombo',
      password: '123456',
    },
    {
      id: '4',
      profile: '',
      fName: 'hasitha',
      lName: 'dilshan',
      dob: '2000-01-01',
      age: '20',
      company: 'Company Name',
      email: 'UgYQ2@example.com',
      phoneNo: '0771234567',
      address: 'No. 123, Colombo, Sri Lanka',
      province: 'Colombo',
      district: 'Colombo',
      password: '123456',
    },
    {
      id: '5',
      profile: '',
      fName: 'hasitha',
      lName: 'dilshan',
      dob: '2000-01-01',
      age: '20',
      company: 'Company Name',
      email: 'UgYQ2@example.com',
      phoneNo: '0771234567',
      address: 'No. 123, Colombo, Sri Lanka',
      province: 'Colombo',
      district: 'Colombo',
      password: '123456',
    },
  ]

  return (
    <div className="">
      <div className="flex md:justify-between gap-10 mb-3">
        <div className="flex gap-4">
          <div>
            <p className="text-lg font-semibold md:text-2xl">Users</p>
            <p className="text-sm">{userData.length} results found</p>
          </div>
          <AddServiceProviderForm />
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
              <tr className="text-left">
                <th className="border px-4 py-2 max-w-fit">#</th>
                <th className="border px-4 py-2 text-left max-w-fit">
                  Profile
                </th>
                <th className="border px-4 py-2 text-left max-w-fit">Name</th>
                <th className="border px-4 py-2 text-left max-w-fit">
                  DOB(Age)
                </th>
                <th className="border px-4 py-2 text-left max-w-fit">
                  company{' '}
                </th>
                <th className="border px-4 py-2 text-left max-w-fit">Email</th>
                <th className="border px-4 py-2 text-left max-w-fit">
                  Phone No
                </th>
                <th className="border px-4 py-2 text-left max-w-fit">
                  Address
                </th>
                <th className="border px-4 py-2 text-left max-w-fit">
                  Province
                </th>
                <th className="border px-4 py-2 text-left max-w-fit">
                  District
                </th>
                <th className="border px-4 py-2 text-left max-w-fit">
                  Options
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {userData.map((row) => (
                <tr key={row.id} className="odd:bg-light_gray   even:bg-white">
                  <td className="border px-2 py-1">{row.id}</td>
                  <td className="border px-5 py-1">
                    <Image
                      //src={row.profile}
                      src={user} // object array ekt image pass kran bari una
                      width={40}
                      height={40}
                      className="border rounded-full"
                      alt="Picture of the user"
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <div>{row.fName}</div>
                    <div>{row.lName}</div>
                  </td>
                  <td className="border px-2 py-1">
                    <div>{row.dob}</div>
                    <div>Age({row.age})</div>
                  </td>
                  <td className="border px-2 py-1">{row.company}</td>
                  <td className="border px-2 py-1">{row.email}</td>
                  <td className="border px-2 py-1">{row.phoneNo}</td>
                  <td className="border px-2 py-1">{row.address}</td>
                  <td className="border px-2 py-1">{row.province}</td>
                  <td className="border px-2 py-1">{row.district}</td>
                  <td className="border px-2 py-1">
                    <ServiceProviderOptions />
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
