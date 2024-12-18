"use client"

import { IoAnalytics } from "react-icons/io5";
import StatisticCard from "@/components/service-provider/statistic-card";
import CustomDropdown from '@/components/user/custom-dropdown-menu'
import  LineChartCard  from '@/components/service-provider/line-chart';
import { FaUsers } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { IoNewspaper } from "react-icons/io5";

const filterOptions: string[] = [
  'This week',
  'This month',
  'This year',
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

export default function Dashboard() {
  const viewCount = 1700
  
  const handleFilterChange = (selectedOption: string) => {
    console.log('Selected filter:', selectedOption)
  }

  return (
    <>
      <section className="flex flex-1 flex-col gap-5 ">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold md:text-2xl my-auto">Dashboard</h1>
          <div className='flex gap-2 '>
              
                <CustomDropdown
                  options={filterOptions}
                  onSelect={handleFilterChange}
                />
              
          </div>
        </div>     
                   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 ">
          {/* Statistic Card with IoAnalytics Icon */}
          <StatisticCard
            title="1000"
            subtitle="Users"
            icon={<FaUsers />}
            iconSize={50} 
            href={"/admin/users"}          
          />

          <StatisticCard
            title="40"
            subtitle="Services"
            icon={<FaWarehouse />}
            iconSize={40}
            href={"/admin/services"} 
          />

          <StatisticCard
            title="20"
            subtitle="Service Providers"
            icon={<RiUserStarFill />}
            iconSize={40}
            href={"/admin/service-providers"} 
          />

          <StatisticCard
            title="200"
            subtitle="News"
            icon={<IoNewspaper />}
            iconSize={40}
            href={"/admin/news"} 
          />
              
        </div>

        <div>        
       
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <LineChartCard data={chartData} title={"This user growth Line chart"} />
          <LineChartCard data={chartData } title={"This Services growth Line chart"} />
          <LineChartCard data={chartData } title={"This Service Providers growth Line chart"} />
        </div>

      </section>
    </>
  )
}


