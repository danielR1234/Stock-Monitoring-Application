import React, { useState } from 'react'
import clsx from 'clsx'
import { MenuIcon } from '@heroicons/react/solid'
import { DarkModeToggle } from '../DarkModeToggle'
import { primaryLinks, userLinks } from './data/headerLinks'
import MainNav from './Nav/MainNav'
import { MyLink } from '../links'

export const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOPen] = useState<boolean>()
  const toggleOpen = () => setIsMobileOPen(!isMobileOpen)

  return (
    <header
      className={clsx(
        'z-30 bg-transparent',
        isMobileOpen &&
          'fixed bg-primary-500 lg:static justify-between right-0 top-0 bottom-0 left-0 flex flex-col',
      )}
    >
      <div className='lg:max-w-7xl xl:space-x-16 lg:space-x-10 lg:mx-auto lg:h-20 lg:px-6 flex items-center justify-between w-full h-12 px-2'>
        <div className='flex justify-between'>
          <DarkModeToggle className='mr-2' />
          <h3>EPBS</h3>
        </div>
        <MenuIcon
          aria-label='Menü'
          onClick={toggleOpen}
          className='lg:hidden focus:cursor-pointer w-8 h-8'
        />

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
          <nav className='xl:space-x-16 flex space-x-10'>
            <MainNav links={userLinks.user} hasUserIcon />
          </nav>
        </div>
        {/* mobile items */}
      </div>
      {isMobileOpen && (
        <div className='lg:hidden flex flex-col items-center justify-between flex-1 pt-2 overflow-auto'>
          <nav className='overflow-auto'>
            <div className='mb-2'>
              {primaryLinks?.stocks[0]?.items?.map((data) => (
                <MyLink href={data.url}>stock {data.text}</MyLink>
              ))}
              {primaryLinks?.crypto[0]?.items?.map((data) => (
                <MyLink href={data.url}>crypto {data.text}</MyLink>
              ))}
            </div>
            {userLinks?.user.map((data) => (
              <MyLink href={data.url}>{data.text}</MyLink>
            ))}
            <p>logout</p>
          </nav>
        </div>
      )}
    </header>
  )
}
export default Header
