import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='flex items-center gap-3'>
      <Image src={'/logo.png'} alt='logo' width={30} height={30}/>
      <h2 className='font-semibold text-xl'>SyncBoard</h2>
    </div>
  )
}

export default Logo
