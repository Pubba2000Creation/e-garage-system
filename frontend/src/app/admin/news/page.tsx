'use client'

import { useState } from 'react' // Import useState  from 'react'
import SmBtn from '@/components/user/sm-btn'
import Image from 'next/image'
import testImage from '@/public/images/carousel_1.jpg'
import OptionsBtns from '@/components/admin/user-options'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { IoSearchOutline } from 'react-icons/io5'
import AddNewsForm from '@/components/admin/add-news-form'
import NewsOptions from '@/components/admin/news-options'

export default function News() {
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

  type newsData = {
    id: string
    image: string
    title: string
    description: string
    publishDate : string
    timeAgo : string

  }

  const newsData: newsData[] = [
    {
      id: '1',
      image : '',
      title: 'News Title',
      description: 'News Description',
      publishDate : '2022-01-01',
      timeAgo : '2 hours'
    },
    {
      id: '2',
      image : '',
      title: 'News Title',
      description: 'News Description',
      publishDate : '2022-01-01',
      timeAgo : '2 hours'
    },
    {
      id: '3',
      image : '',
      title: 'News Title',
      description: 'News Description',
      publishDate : '2022-01-01',
      timeAgo : '2 hours'
    },

  ]

  return (
    <div className="">
      <div className="flex md:justify-between gap-10 mb-3">
        <div className="flex gap-4">
          <div>
            <p className="text-lg font-semibold md:text-2xl">News</p>
            <p className="text-sm">{newsData.length} results found</p>
          </div>
          <AddNewsForm />
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
                <th className="border px-4 py-2  max-w-fit">Image</th>
                <th className="border px-4 py-2  max-w-fit">Title</th>
                <th className="border px-4 py-2  max-w-fit">Publish Date</th>
                <th className="border px-4 py-2  max-w-fit">Time ago</th>
                <th className="border px-4 py-2  max-w-fit">Options</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {newsData.map((row) => (
                <tr key={row.id} className="odd:bg-light_gray text-center  even:bg-white">
                  <td className="border px-2 py-1">{row.id}</td>
                  <td className="border px-5 py-1 flex justify-center">
                    <Image
                      //src={row.profile}
                      src={testImage} // object array ekt image pass kran bari una
                      width={100}
                      height={100}
                      className="border "
                      alt="Picture of the user"
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <div>{row.title}</div>
                  </td>
                  <td className="border px-2 py-1">
                    <div>{row.publishDate}</div>
                  </td>
                  <td className="border px-2 py-1">
                    <div>{row.timeAgo}</div>
                  </td>
                  <td className="border px-2 py-1">
                    <NewsOptions/>
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
