'use client'

// import { Input } from "@/components/ui/input"
import Image from "next/image"
import hero_pic from '@/public/images/hero_pic.svg'
import Btn from "./btn"
import  SelectDistrictCombobox  from "@/components/user/select-district"
import { useEffect, useState } from "react"
import SelectServicesCombobox from "@/components/user/select-service"

export function HeroSectionComponent() {

  const [services, setServices] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [error, setError] = useState('');

  function Search() {
    console.log('click search')
  }

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(""); // Clear the error after 3 seconds (3000 ms)
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or error changes
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log( services, selectedDistrict);
    if ( !services || !selectedDistrict) {
      setError('Please enter all required fields');
      return;
    }
    setError('');
    // Proceed with form submission
  };

  return (
    <section id="hero-section" className="relative h-[600px] w-full overflow-hidden">
           
      <Image
        src={hero_pic}
        width={1200}
        height={600}
        alt="Auto service background"
        className="absolute inset-0 object-cover w-full h-full brightness-50 rounded-md "
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center ">
        <h1 className="max-w-4xl mb-4 text-4xl font-bold sm:text-5xl md:text-6xl text-white">
          Enter keywords to find relevant services
        </h1>
        <p className="max-w-xl mb-8 text-lg text-gray-200 text-white">
          Lorem ipsum dolor sit amet consectetur. Tellus donec pellentesque donec convallis id massa sagittis.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-3xl flex flex-col sm:flex-row gap-4">
          <div className="flex-grow flex rounded-md overflow-hidden gap-x-2 bg-white">
            
            <div className="w-1/2 flex items-center justify-center">
                
                <SelectServicesCombobox value={services} onChange={setServices}/>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <SelectDistrictCombobox value={selectedDistrict} onChange={setSelectedDistrict}/>
            </div>            

          </div>
          <Btn name="Search" fun={Search} type="submit" />
          
        </form>
        {error && <p className="text-red-500 my-4">{error}</p>}
      </div>
    </section>
  )
}