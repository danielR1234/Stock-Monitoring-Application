import React from 'react'
import { Layout } from 'src/components/layout'

const Home: React.FC = () => {
  return (
    <Layout main='test'>
      <h1 className='text-primary-500 flex justify-between'>
        Financial News Data
      </h1>
      <div className=' mt-4'>
        <h3 className='text-primary-300'>Stocks</h3>
        <h3 className='text-primary-300'>Cryptops</h3>
      </div>

      <div className='mt-4'>
        <h5>Keep track of the most important Financial News</h5>
        <h5>Keep Track of your Portfolio</h5>
        <h5>Anaylse investments</h5>
      </div>
    </Layout>
  )
}
export default Home
