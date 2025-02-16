"use client"
import React from 'react';
import Logo from '../../../_components/Logo'; // Move up two levels to reach `app/_components/Logo`
import { OrganizationSwitcher, useAuth, UserButton } from '@clerk/nextjs';

function Header() {

  const {orgId} = useAuth()
  console.log(orgId)
  return (
    <div className='flex justify-between items-center p-6 shadow-md'> 
      <Logo />
      <OrganizationSwitcher 
        afterLeaveOrganizationUrl={'/dashboard'} 
        afterCreateOrganizationUrl={'/dashboard'}
      />
      <UserButton/>
    </div>
  );
}

export default Header;
