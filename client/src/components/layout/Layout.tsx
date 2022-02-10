import React from 'react'
import clsx from 'clsx'
import { Header } from '../Header'

type Props = {
  main: string
}

export const Layout: React.FC<Props> = ({ children, main }) => {
  return (
    <div className='flex flex-col min-h-screen font-sans'>
      <Header />
      <main
        className={clsx(
          main,
          'flex-1 pt-24 lg:px-6 justify-center items-center w-full mx-auto lg:max-w-7xl',
        )}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
