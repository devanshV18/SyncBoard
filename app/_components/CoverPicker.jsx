import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import CoverOption from '../_shared/CoverOption'

function CoverPicker({children}) {
  return (
    <Dialog>
  <DialogTrigger className='w-full'>
    {children}
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Update Cover</DialogTitle>
      <DialogDescription>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3'>
          {
            CoverOption.map((cover, index) => (
              <div key={index} className='cursor-pointer'>
                <Image src={cover?.imageUrl} width={200} height={140} alt='covers'
                  className='h-[70px] w-full rounded-md object-cover'
                />
              </div>
            ))
          }
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default CoverPicker
