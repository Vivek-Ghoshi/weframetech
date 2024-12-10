import Footer from '@/components/Footer'
import MainPage from '@/components/Mainpage'
import NavigationBar from '@/components/NavigationBar'
import Newsletter from '@/components/NewsLetter'
import ProductGrid from '@/components/ProductGrid'
import ProductLayout from '@/components/ProductLayout'
import ServiceFeatures from '@/components/ServiceFeatures'

import React from 'react'

const index = () => {
  return (
    <div>
    <NavigationBar/>
    <MainPage/>
    {/* <ProductLayout/> */}
    <ProductGrid/>
    <ServiceFeatures/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default index
