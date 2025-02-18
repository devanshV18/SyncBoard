"use client"
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import Button from '../../../_components/Button'
import { AlignLeft, LayoutGrid } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function WorkspaceList() {

    const {user} = useUser()

    const [workspaceList, setWorkspaceList] = useState([])

  return (
    <div className='my-10 p-10 md:px-5 lg:px-16 xl:p-32'>
      <div className='flex justify-between'>
        <h2 className='font-bold text-2xl'>Hello, {user?.fullName}</h2>
        <Link
        href={'/createworkspace'}
        >
          <Button>+</Button>
        </Link>
      </div>

      <div className='mt-10 flex justify-between'>
        <div>
          <h2 className='font-medium text-primary'>
            Your Workspaces 🏢💻✨
          </h2>
        </div>

        <div className='flex gap-2 '>
          <LayoutGrid/>
          <AlignLeft/>
        </div>
      </div>

      {workspaceList?.length == 0 
      ? 
      <div className='flex flex-col justify-center items-center my-10'>
        <Image src={'/workspace.png'} width={200} height={200} alt='img'/>

        <h2>Create a new Workspace</h2>

        <Link
        href={'/createworkspace'}
        >
          <Button className="my-3">+ New Workspace</Button>
        </Link>
      </div>
      :
      <div>WSL</div>
      }
    </div>
  )
}

export default WorkspaceList
