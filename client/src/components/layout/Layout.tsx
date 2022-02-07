import React from 'react'
import clsx from 'clsx'
import { Header } from '../Header'

type Props = {
  main: string
}

export const Layout: React.FC<Props> = ({ children, main }) => {
  return (
    <>
      <Header />
      <main className={clsx(main)}>{children}</main>
    </>
  )
}

export default Layout
