import React, { useState } from 'react'

const EditMessage = ({message, setMessage}) => {

  return (
    <div className='flex flex-col justify-center items-center space-y-4 m-4'>
        <h4 className='font-semibold'>Message</h4>
        <input type='text' className='border-2 border-gray-700 rounded-md py-2 px-4 w-[400px]' value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  )
}

export default EditMessage