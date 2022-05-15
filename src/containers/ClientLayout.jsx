import React from 'react'
import '../styles/ClientLayout.css'

const HomeLayout = ({ children }) => {
  return (
    <main className='Main'>
      <div className='Main__container'>
        { children }
      </div>
    </main>
  )
}

export default HomeLayout