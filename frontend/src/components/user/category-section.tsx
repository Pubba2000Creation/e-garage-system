"use client"
import React from 'react'
import CategoryCards from '@/components/user/category-cards'

import repair_Shops from '@/public/images/repair-Shops.svg'
import Spare_Parts from '@/public/images/spare-Parts.svg'
import Oil_Changes from '@/public/images/oil-Changes.svg'
import Vehicle_Inspections from '@/public/images/vehicle-Inspections.svg'
import Tire_Services from '@/public/images/tire-Services.svg'
import Service_Centers from '@/public/images/service-Centers.svg'

export default function CategorySection() {

    function handleClickCategory(category_type: string) {
        console.log("Category clicked: ", category_type);
    }

  return (
    <section id='category_section' className='my-16'>

        <h2 className=" text-2xl font-bold text-center mb-10 ">
            Choose a category to browse.
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <CategoryCards title="Repair Shops" img={repair_Shops} fun={() => handleClickCategory("Repair Shops")} />
            <CategoryCards title="Spare Parts" img={Spare_Parts} fun={() => handleClickCategory("Spare Parts")}/>
            <CategoryCards title="Oil Changes" img={Oil_Changes} fun={() => handleClickCategory("Oil Changes")}/>
            <CategoryCards title="Vehicle Inspections" img={Vehicle_Inspections} fun={() => handleClickCategory("Vehicle Inspections")}/>
            <CategoryCards title="Tire Services" img={Tire_Services} fun={() => handleClickCategory("Tire Services")}/>
            <CategoryCards title="Service Centers" img={Service_Centers} fun={() => handleClickCategory("Service Center")}/>
        </div>
    </section>
  )
}
