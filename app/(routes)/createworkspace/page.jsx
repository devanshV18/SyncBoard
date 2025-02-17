"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../../_components/Button'
import Input from '../../_components/Input'
import EmojiPickerComponent from '../../_components/EmojiPickerComponent'
import CoverPicker from '../../_components/CoverPicker'
import { Loader2Icon, SmilePlus } from 'lucide-react'
import {db} from '../../../config/firebase.config'
import {doc, setDoc} from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'
import { useAuth } from '@clerk/clerk-react'

function CreateWorkspace() {

  const [coverImage, setCoverImage] = useState('/covern.png')
  const [workspaceName, setWorkspaceName] = useState()
  const [emoji, setEmoji] = useState()
  const {user} = useUser()
  const {orgId} = useAuth()
  const [loading, setLoading] = useState(false)



  // function to create a new workspace document and save it to firebase to fetch and create new and further pages
  const onCreateWorkspace = async () => {
    setLoading(true)
    const docId = Date.now()
    const result = await setDoc(doc(db, 'Workspace', docId.toString()), {
      name: workspaceName,
      emoji: emoji,
      coverImage: coverImage,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      id: docId,
      orgId: orgId?orgId:user?.primaryEmailAddress?.emailAddress
    })

    setLoading(false)
    console.log("Data Inserted")
  }

  return (
    <div className='p-10 md:px-36 lg:px-64 xl:px-96 py-28'>
      
      <div className='shadow-2xl rounded-xl'>
        {/* CoverImage */}

        <CoverPicker setNewCover={(v) =>setCoverImage(v) }>
            <div className='relative group cursor-pointer'>

              <h2 
              className='hidden absolute p-4 w-full h-full group-hover:flex items-center justify-center text-xl font-medium'
              >
                Change Cover
              </h2>

              <div className='group-hover:opacity-60'>
                <Image src={coverImage} width={400} height={400}
                  className='w-full h-[180px] object-cover rounded-t-xl'
                  alt='cover image'
                />
              </div>

            </div>
        </CoverPicker>
        
        {/* Input section */}

        <div className='p-12'>
          <h2 className='font-medium text-2xl'>
            Create a new Workspace
          </h2>
          <h2 className='text-md mt-2'>
            A shared space for you and your team! You can always rename it anytime you want.
          </h2>

          <div className='mt-8 flex gap-2 items-center'>
            <EmojiPickerComponent setEmojiIcon={(v) => setEmoji(v)}>
              <Button variant="outline">
                {emoji ? emoji : <SmilePlus/>}
              </Button>
            </EmojiPickerComponent>
            <Input 
            placeholder="workspace name"
            className="placeholder:font-semibold border p-2 rounded-md"
            onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>

          <div className='mt-7 flex justify-end gap-6'>
            <Button 
            disabled={!workspaceName?.length} 
            variant="default"
            onClick={onCreateWorkspace}

            >
              Create {loading && <Loader2Icon className='animate-spin ml-2'/>}
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
