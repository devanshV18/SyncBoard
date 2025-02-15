import React from 'react';
import Logo from '../../../_components/Logo'; // Move up two levels to reach `app/_components/Logo`
import { UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <div className='flex justify-between items-center p-6 shadow-md'> 
      <Logo />
      <UserButton/>
    </div>
  );
}

export default Header;
