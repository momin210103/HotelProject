import React from 'react'
import Hero from '../components/home/Hero'
import BookingBar from '../components/home/BookingBar'
import HouseWithBackyard from '../components/home/HouseWithBackyard'
import HotelsLivingRoom from '../components/home/HotelsLivingRoom'
import MostPicked from '../components/home/MostPicked'
import BookingBarnew from '../components/BookingBar/BookingBar'

export default function Home() {
  return (
    <>
    <Hero/>
    {/* <BookingBar/> */}
    <BookingBarnew/>
    <MostPicked/>
    <HouseWithBackyard/>
    <HotelsLivingRoom/>

    </>
  )
}
