import React from 'react'
import Header from '../Components/Header'
import UniversityCards from '../Components/Universities/UniversityCard'

const University = () => {
  return (
    <>    
      <Header />
      <h1 className='text-center font-bold font-mono text-3xl pt-4 pb-2'>Universities</h1>
      <p className='text-center font-bold font-mono text-xl pb-4'>This is where you can see all of the universities</p>
      <UniversityCards />
    </>

)
}

export default University