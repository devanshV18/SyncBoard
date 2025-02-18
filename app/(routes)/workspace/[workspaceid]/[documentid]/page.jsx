"use client"
import React, { useEffect } from 'react'
import SideNav from '../../_components/SideNav'


function WorkspaceDocument() {

  return (
    <div>
      {/* sidenavv */}
      <div className=''>
        <SideNav/>
      </div>

      {/* docuemnt */}
      <div className='md:ml-72'>
        Documents
      </div>
    </div>
  )
}

export default WorkspaceDocument
