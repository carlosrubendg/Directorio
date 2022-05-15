import React from 'react'
import { Aside } from '../components/Aside'
import Categories from '../components/Categories'
import HomeLayout from '../containers/HomeLayout'

const Home = () => {
  return (
    <HomeLayout>
      <Categories />
      <Aside />
    </HomeLayout>
  )
}

export default Home