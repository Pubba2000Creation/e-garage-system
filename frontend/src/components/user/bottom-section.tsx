'use client'
import React from 'react'
import Border_btn from '@/components/user/border-btn'

export default function BottomSection() {
  function handleClickViewMore() {
    console.log('click view more')
  }
  return (
    <section id="bottom_section" className="grid my-5 place-items-center">
      <Border_btn name={'View more'} fun={handleClickViewMore} />
    </section>
  )
}
