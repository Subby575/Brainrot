"use client"
import React from 'react'
import Parallax from './_components/parallax'
import Hero from './_components/Hero'
import TrippyScroll from './_components/Hypno'

function page() {
  return (
    <div>

      {/* <TrippyScroll/> */}
      <Hero/>
      <Parallax/>
    </div>
  )
}

export default page