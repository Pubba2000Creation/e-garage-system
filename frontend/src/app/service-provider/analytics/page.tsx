"use client"

import { IoAnalytics } from "react-icons/io5";
import StatisticCard from "@/components/service-provider/statistic-card";
import CustomDropdown from '@/components/user/custom-dropdown-menu'
import  LineChartCard  from '@/components/service-provider/line-chart';

const filterOptions: string[] = [
  'This week',
  'This month',
  'This year',
]

const serviceOptions: string[] = [
  'test01',
  'test02', 
]

const chartData = [    
  { month: "January", views: 18 },
  { month: "February", views: 5 },
  { month: "March", views: 23 },
  { month: "April", views: 73 },
  { month: "May", views: 20 },
  { month: "June", views: 214 },
  { month: "Jul", views: 186 },
  { month: "Aug", views: 305 },
  { month: "Sep", views: 30 },
  { month: "Oct", views: 34 },
  { month: "Nov", views: 70 },
  { month: "Dec", views: 29 },
]

export default function Analytics() {
  const viewCount = 1700
  
  const handleFilterChange = (selectedOption: string) => {
    console.log('Selected filter:', selectedOption)
  }
  const handleServiceOptionsChange = (selectedOption: string) => {
    console.log('Selected Options:', selectedOption)
  }
  return (
    <>
      <section className="flex flex-1 flex-col gap-4 p-0 lg:gap-6 lg:p-0">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold md:text-2xl">Analytics Dashboard</h1>
          <div className='flex gap-2 '>
              <div className=''>
                <CustomDropdown
                  options={serviceOptions}
                  onSelect={handleServiceOptionsChange}
                />
              </div>
              <div>
                <CustomDropdown
                  options={filterOptions}
                  onSelect={handleFilterChange}
                />
              </div>
          </div>
        </div>     
        
             
        <div className="grid sm:grid-cols-3 gap-3   ">
          {/* Statistic Card with IoAnalytics Icon */}
          <StatisticCard
            title="1700"
            subtitle="Monthly Views"
            icon={<IoAnalytics />}
            iconSize={50}
          />

          <StatisticCard
            title="04"
            subtitle="Published Services"
            icon={<IoAnalytics />}
            iconSize={50}
          />

          <StatisticCard
            title="02"
            subtitle="Pending Services"
            icon={<IoAnalytics />}
            iconSize={50}
          />
              
        </div>

        <div>        
          <div className='flex justify-between'>
            <p className='text-lg font-medium text-black text-left'>Total Views <span className='text-lg font-semibold text-black' >{viewCount}</span> </p>

            {/* <div className='flex gap-2 '>
              <div className=''>
                <CustomDropdown
                  options={serviceOptions}
                  onSelect={handleServiceOptionsChange}
                />
              </div>
              <div>
                <CustomDropdown
                  options={filterOptions}
                  onSelect={handleFilterChange}
                />
              </div>
            </div> */}

          </div>         
        </div>

        <div className="">
          <LineChartCard data={chartData } />
        </div>

      </section>
    </>
  )
}

