"use client"

import { IoAnalytics } from "react-icons/io5";
import StatisticCard from "@/components/service-provider/statistic-card";
import CustomDropdown from '@/components/user/custom-dropdown-menu'
import  LineChartCard  from '@/components/service-provider/line-chart';
import { FaWarehouse } from "react-icons/fa";
import { PiClockFill } from "react-icons/pi";

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

  // const handleServiceOptionsChange = (selectedOption: string) => {
  //   console.log('Selected Options:', selectedOption)
  // }

  return (
    <>
      <section className="flex flex-1 flex-col gap-4 ">

        <div className="flex justify-between">
          <h1 className="text-lg font-semibold md:text-2xl my-auto">Analytics</h1>
          <div className='flex gap-2 '>
              <div className=''>
                <CustomDropdown
                  options={serviceOptions}
                  onSelect={handleFilterChange}
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
            href={"/service-provider/manage-service"}
          />

          <StatisticCard
            title="04"
            subtitle="Published Services"
            icon={<FaWarehouse />}
            iconSize={40}
            href={"/service-provider/manage-service"}
          />

          <StatisticCard
            title="02"
            subtitle="Pending Services"
            icon={<PiClockFill />}
            iconSize={40}
            href={"/service-provider/manage-service"}
          />
              
        </div>

        <div>                 
            <h3 className='text-sm font-bold text-gray text-left'>Total Views <span className=' text-black' >{viewCount}</span> </h3>        
        </div>

        <div className="">
          <LineChartCard data={chartData } title={"This is views growth Line chart"} />
        </div>

      </section>
    </>
  )
}


