import React from 'react'
import Header from './_components/Header'
import { UserButton } from '@clerk/nextjs'

function Dashboard() {
  return (
    <div>
      <UserButton/>
    </div>
  )
}

export default Dashboard
