import OurTeam from '@/components/user/ourTeam'
import React from 'react'

export default function AboutSection() {
  return (
    <>
      <section className="bg-slate-100 py-10 px-4 md:px-8 rounded-lg my-5">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            About E Garage
          </h2>
          <p className="text-lg md:text-xl  text-gray leading-relaxed text-justify">

            At <span className="text-primary  font-semibold">E Garage</span>, we
            understand the unique challenges and demands of running a successful
            garage. Our mission is to empower you with the tools you need to
            streamline appointment management, enhance customer engagement, and
            boost your efficiency. With eGarage's dedicated platform, you gain
            access to a world of possibilities. From real-time scheduling to
            seamless communication with your clients, we're here to help you
            take your garage to new heights of success. Join the eGarage family
            and experience the future of garage management. Your journey to
            greater efficiency and customer satisfaction starts here.
            
          </p>
        </div>
      </section>
      <OurTeam />
    </>
  )
}
