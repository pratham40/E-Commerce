import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
  return (
    <div className='w-screen h-[100vh] bg-gray-800'>
        <div className='flex justify-center items-center h-full'>
            <div className='flex flex-col items-center space-y-3'>
                <FiAlertTriangle size="80px" className='text-red-500'/>
                <h1 className='text-4xl text-gray-400'>Page 404 Not Found</h1>
                <Link onClick={navigate(-1)} className='btn btn-primary'>
                    Go Back
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound