import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  let {userid} = useParams()
  return (
    <div><h1 className='flex items-center justify-center  font-bold text-yellow-600'>User:{userid}</h1></div>
  )
}

export default User