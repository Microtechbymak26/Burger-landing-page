"use client";
import Hero from './hero/hero'
import Features from './features/features'
import PopularBurger from './popular burger/PopularBurger'
import Delievery from './Delievery/Delievery'
import Team from './Team/Team'
import Reservation from './Reservation/Reservation'
import NewsLetter from './NewsLetter/NewsLetter'


const home = () => {
  return (
    <div className='overflow-hidden'>
    <Hero></Hero>
    <Features></Features>
    <PopularBurger></PopularBurger>
    <Delievery></Delievery>
    <Team></Team>
    <Reservation></Reservation>
    <NewsLetter/>
    
    </div>
  )
}

export default home
