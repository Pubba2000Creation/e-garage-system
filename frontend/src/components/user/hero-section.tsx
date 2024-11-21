'use client'

// import { Input } from "@/components/ui/input"
import Image from 'next/image'
import hero_pic from '@/public/images/hero_pic.svg'
import Btn from '@/components/user/btn'
import { useEffect, useState } from 'react'
// import SelectServicesCombobox from "@/components/user/select-service"
import UserSearchPopSection from '@/components/user/search-pop-section'
import SelectDistrictHeroSectionCombobox from '@/components/user/select-district-hero-section'

export default function HeroSectionComponent() {
  const [services, setServices] = useState<string>('')
  const [selectedDistrict, setSelectedDistrict] =
    useState<string>('All of SriLanka')
  const [error, setError] = useState<string>('')
  const [isSeraching, setSerach] = useState<boolean>(false)
  const [searchingError, setSearchingError] = useState<boolean>(false)

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('') // Clear the error after 3 seconds (3000 ms)
        setSerach(false)
      }, 3000)

      return () => clearTimeout(timer) // Cleanup the timer if the component unmounts or error changes
    }
  }, [error])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('selected services -', services)
    console.log('selected District -', selectedDistrict)

    if (!services || !selectedDistrict) {
      setError('Please enter all required fields')
      return
    }

    if (services || selectedDistrict) {
      // serach not matched
      setSerach(true)
      return
    }
    if (false) {
      // serach not matched
      setSearchingError(true)
    } else {
      setError('')
    }
  }

  return (
    <>
      <section
        id="hero-section"
        className="relative h-[600px] w-full overflow-hidden mt-3"
      >
        <Image
          src={hero_pic}
          alt="Auto service background"
          // width={1200}
          // height={600}
          layout="fill"
          objectFit="cover"
          className=" absolute inset-0 object-cover  w-auto h-auto brightness-100 rounded-md "
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center ">
          <h1 className="max-w-4xl mb-4 text-4xl font-bold sm:text-5xl md:text-6xl text-white">
            Enter keywords to find relevant services
          </h1>
          <p className="max-w-xl mb-8 text-lg  text-white">
            Find the best service providers for your needs
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl flex flex-col sm:flex-row gap-4"
          >
            <div className="flex-grow flex rounded-md overflow-hidden gap-x-2 bg-white">
              <div className="w-1/2 flex items-center justify-center">
                {/* <SelectServicesCombobox value={services} onChange={setServices}/> */}

                <input
                  type="text"
                  name="search"
                  id="search"
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  placeholder="Search  Services..."
                  className="placeholder-slate-800 placeholder:text-sm placeholder:font-thin w-full px-4 py-2 border border-transparent rounded-md focus:outline-none focus:border-white"
                />
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <SelectDistrictHeroSectionCombobox
                  value={selectedDistrict}
                  onChange={setSelectedDistrict}
                />
              </div>
            </div>
            <Btn name="Search" type="submit" fun={() => handleSubmit} />
          </form>
          {error && <p className="text-red-500 my-4">{error}</p>}
        </div>
      </section>

      {isSeraching && (
        <UserSearchPopSection
          search_count={10}
          one_stars_count={50}
          two_stars_count={70}
          three_stars_count={20}
          four_stars_count={40}
          five_stars_count={80}
          search_key_word={services}
          searchingError={searchingError}
          onclose={() => setSerach(false)}
        />
      )}
    </>
  )
}
