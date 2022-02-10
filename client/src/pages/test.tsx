import React from 'react'
import { Button } from 'src/components/buttons'
import { Layout } from 'src/components/layout'

const test: React.FC = () => {
  return (
    <Layout main='test'>
      <div className=' bg-primary-400 mt-52 flex justify-between'>hallo</div>
      <div className='flex flex-wrap gap-2'>
        <Button variant='primary'>Primary Variant</Button>
        <Button variant='outline'>Outline Variant</Button>
        <Button variant='ghost'>Ghost Variant</Button>
        <Button variant='dark'>Dark Variant</Button>
        <Button variant='light'>Light Variant</Button>
      </div>
      <div className='flex flex-wrap gap-2'>
        <Button buttonDisabled variant='primary'>
          Disabled
        </Button>
        <Button buttonDisabled variant='outline'>
          Disabled
        </Button>
        <Button buttonDisabled variant='ghost'>
          Disabled
        </Button>
        <Button buttonDisabled variant='dark'>
          Disabled
        </Button>
        <Button buttonDisabled variant='light'>
          Disabled
        </Button>
      </div>
      <div className='flex flex-wrap gap-2'>
        <Button isLoading variant='primary'>
          Disabled
        </Button>
        <Button isLoading variant='outline'>
          Disabled
        </Button>
        <Button isLoading variant='ghost'>
          Disabled
        </Button>
        <Button isLoading variant='dark'>
          Disabled
        </Button>
        <Button isLoading variant='light'>
          Disabled
        </Button>
      </div>
    </Layout>
  )
}
export default test
