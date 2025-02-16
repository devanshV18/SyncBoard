"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../../_components/Button'
import Input from '../../_components/Input'
import { SmilePlus } from 'lucide-react'

function CreateWorkspace() {

  const [coverImage, setCoverImage] = useState('/covern.png')
  const [workspaceName, setWorkspaceName] = useState()

  return (
    <div className='p-10 md:px-36 lg:px-64 xl:px-96 py-28'>
      
      <div className='shadow-2xl rounded-xl'>
        {/* CoverImage */}
        <div className='relative group cursor-pointer'>

          <h2 
          className='hidden absolute p-4 w-full h-full group-hover:flex items-center justify-center text-xl font-medium'
          >
            Change Cover
          </h2>

          <div className='group-hover:opacity-60'>
            <Image src={coverImage} width={400} height={400}
              className='w-full h-[150px] object-cover rounded-t-xl'
              alt='cover image'
            />
          </div>

        </div>

        {/* Input section */}

        <div className='p-12'>
          <h2 className='font-medium text-2xl'>
            Create a new Workspace
          </h2>
          <h2 className='text-md mt-2'>
            A shared space for you and your team! You can always rename it anytime you want.
          </h2>

          <div className='mt-8 flex gap-2 items-center'>
            <Button variant="outline">
              <SmilePlus/>
            </Button>
            <Input 
            placeholder="workspace name"
            className="placeholder:font-semibold border p-2 rounded-md"
            onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>

          <div className='mt-7 flex justify-end gap-6'>
            <Button disabled={!workspaceName?.length} variant="default">
              Create
            </Button>
            <Button variant="outline">
              Cancel
            </Button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default CreateWorkspace
