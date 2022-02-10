import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, UserCircleIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'
import { MyLink } from 'src/components/links'
import { navLinkType } from '../data/headerLinks'

type Props = {
  label?: string
  links: navLinkType[] | undefined
  hasUserIcon?: boolean
}

const MainNav: React.FC<Props> = ({ label, links, hasUserIcon }) => {
  return (
    <div className=' text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className=' flex items-center justify-between'>
            {hasUserIcon ? (
              <UserCircleIcon
                className='text-violet-200 hover:text-violet-100 w-7 h-7 ml-2 -mr-1'
                aria-hidden='true'
              />
            ) : (
              <>
                {label}
                <ChevronDownIcon
                  className='text-violet-200 hover:text-violet-100 w-5 h-5 ml-2 -mr-1'
                  aria-hidden='true'
                />
              </>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 w-40 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg'>
            <div className=' px-1 py-1'>
              {links?.map((data) => (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type='button'
                      className={clsx(
                        active && 'bg-primary-500',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                      )}
                    >
                      <MyLink href={data.url}>{data.text}</MyLink>
                    </button>
                  )}
                </Menu.Item>
              ))}
              {hasUserIcon && (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type='button'
                      className={clsx(
                        active && 'bg-primary-500',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                      )}
                    >
                      logout
                    </button>
                  )}
                </Menu.Item>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
export default MainNav
