import React from 'react'
import ClientLayout from '../containers/ClientLayout'
import ClientInfo from '../components/ClientInfo'
import Aside from '../components/Aside'

const Client = () => {
  return (
    <ClientLayout>
      <ClientInfo />
      <Aside />
    </ClientLayout>
  )
}

export default Client