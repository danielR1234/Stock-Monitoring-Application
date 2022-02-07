/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

type Props = {
  href: string | undefined
  className?: string
}

export const MyLink: React.FC<Props> = ({ href, children, className }) => {
  return (
    <Link href={href as string}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default MyLink

MyLink.defaultProps = {
  className: 'w-full flex justify-start',
}
