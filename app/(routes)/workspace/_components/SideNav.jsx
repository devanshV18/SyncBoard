"use client"
import Button from 'app/_components/Button'
import Logo from 'app/_components/Logo'
import { db } from 'config/firebase.config'
import { collection, onSnapshot, query, where, doc, setDoc} from 'firebase/firestore'
import { BellIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {
    const params = useParams()
    console.log(params)
    useEffect(() => {
        if(params?.workspaceId){
            getDocumentList()
        }
    },[params])


    //used to get latest document list
    const getDocumentList = () => {
        console.log("inside fxn atleast")
        const q = query(collection(db, 'workspaceDocuments'), 
        where('workspaceId', '==', Number(params?.workspaceid)))

        console.log("query resolved atleast")

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log("Inside data printing flag")
                console.log(doc.data())
            })
        })
    }

  return (
    <div className='h-screen md:w-72 hidden md:block fixed bg-blue-50 p-5'>
      <div className='flex justify-between items-center'>
        <Logo/>
        <BellIcon className='h-5 w-5 text-gray-500'/>
      </div>
      <hr className='my-5'></hr>


      <div>
        <div className='flex justify-between items-center'>
            <h2 className='font-medium'>Workspace Name</h2>
            <Button size='sm'>+</Button>
        </div>
      </div>
    </div>
  )
}
export default SideNav
