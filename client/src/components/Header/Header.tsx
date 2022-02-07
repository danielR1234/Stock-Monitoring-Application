import React, { useState } from 'react'
import clsx from 'clsx'
import { MenuIcon } from '@heroicons/react/solid'
import { DarkModeToggle } from '../DarkModeToggle'
import { primaryLinks } from './data/headerLinks'
import MainNav from './Nav/MainNav'

export const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOPen] = useState<boolean>()
  const toggleOpen = () => setIsMobileOPen(!isMobileOpen)

  return (
    <header
      className={clsx(
        'z-30 bg-transparent',
        isMobileOpen && 'fixed right-0 top-0 bottom-0 left-0 flex flex-col  ',
      )}
    >
      <div className='lg:max-w-7-xl xl:space-x-16 lg:space-x-10 lg:mx-auto lg:h-20 lg:px-6 flex items-center justify-between h-12 px-2'>
        <div className='flex justify-between'>
          <DarkModeToggle className='mr-2' />
          <h3>EPBS</h3>
        </div>
        <MenuIcon onClick={toggleOpen} className='lg:hidden w-8 h-8' />
        {/* desktop items */}
        <div className='lg:flex items-center justify-between flex-1 hidden'>
          <nav className='xl:space-x-16 flex space-x-10'>
            {primaryLinks.stocks.map((data) => (
              <MainNav label={data.text} links={data.items} />
            ))}
            {primaryLinks.crypto.map((data) => (
              <MainNav label={data.text} links={data.items} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header
