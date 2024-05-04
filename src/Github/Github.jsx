import React, { useState,  useEffect } from 'react'

const Github = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
       fetch("https://api.github.com/users/hiteshchoudhary")
       .then((res)=>res.json())
       .then((data)=>{ 
        console.log(data);
        setData(data)})
    },[])
  return (
    <div>
        <h1 className='flex items-center justify-center text-orange-600 font-bold'>Github :{data.followers}</h1>
        <h2  className='flex items-center justify-center'>
        <img src={data.avatar_url} alt="Fetching ..." width={200} />     
        </h2>
    </div>    
  )
}

export default Github