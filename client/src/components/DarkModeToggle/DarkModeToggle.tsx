/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'

import clsx from 'clsx'

type Props = {
  className?: string
}

export const DarkModeToggle: React.FC<Props> = ({ className = '' }) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (currentTheme === 'dark') {
    if (!mounted) return <div suppressHydrationWarning>Ignore this</div>

    return (
      <div className='dark:text-default-black text-default-white  flex flex-col items-center justify-center'>
        <div
          className={clsx(
            className,
            ' flex items-center justify-center w-full rounded-full',
          )}
        >
          <SunIcon
            className='w-6 h-6 rounded-full'
            role='button'
            onClick={() => setTheme('light')}
          />
        </div>
      </div>
    )
  }

  return (
    <div className=' dark:text-white text-text-black flex flex-col items-center justify-center'>
      <div
        className={clsx(
          className,
          ' flex items-center justify-center w-full rounded-full',
        )}
      >
        <MoonIcon
          className='w-6 h-6 rounded-full'
          role='button'
          onClick={() => setTheme('dark')}
        />
      </div>
    </div>
  )
}
export default DarkModeToggle
DarkModeToggle.defaultProps = {
  className: undefined,
}
