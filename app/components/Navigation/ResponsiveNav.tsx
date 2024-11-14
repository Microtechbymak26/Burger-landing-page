"use client"

import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const ResponsiveNav = () => {

  const [showNav,setShowNav] = React.useState(false)
  
  const openNavHandler = () => {
    setShowNav(true)
  }
  const closeNavHandler = () => {
    setShowNav(false)
  }


  return (
    <div>
      <Nav openNav={openNavHandler}/>
      <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav
function setShowNav(arg0: boolean) {
  throw new Error('Function not implemented.')
}
