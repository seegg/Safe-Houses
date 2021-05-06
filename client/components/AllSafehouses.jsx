import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Region from './Region'

function AllSafehouses () {
  return (
    <>
      <Header />
      <Region />
      <Footer />
    </>
  )
}

// We will use .map() method to map over the regions once database has been established

export default AllSafehouses