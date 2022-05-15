import React from 'react'
import PopularAds from '../components/PopularAds'
import '../styles/HomeLayout.css'

const HomeLayout = ({ children }) => {
  return (
    <main className='Main'>
      <div className='Main__container'>
        <PopularAds />
        { children }
      </div>
    </main>
  )
}

export default HomeLayout