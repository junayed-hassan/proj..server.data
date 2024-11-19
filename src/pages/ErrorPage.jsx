import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
  return (
    <div className='p-7 text-center mt-32'>
        <h1 className='text-2xl font-bold pb-1'>This is ErrorPage</h1>
        <p className='font-medium pb-2'>Your Request Is Wrong Please Go To HomePage</p>
        <h2 className='text-3xl font-bold mb-4'>Status: {error.status}  ||  Message: {error.statusText}</h2>
        <button className='py-2 px-6 bg-green-600 text-yellow-100'><Link to="/">Go Home</Link></button>
    </div>
  )
}

export default ErrorPage