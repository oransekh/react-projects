import React from 'react'

const SubFooter = () => {
  return (
    <div className='bg-gray-100 text-gray-600 py-4'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Desi Tesi. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default SubFooter
