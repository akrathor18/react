import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/akrathor18')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
  return (
    // <div className=" flex min-w-full ">

    <div className='flex  text-center m-4 bg-gray-600 text-white p-4 text-3xl'>

    <img src={data.avatar_url} alt="Git picture" width={150} className="rounded-full" />
    <div className="flex  text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}</div>
    <div className="flex  text-center m-4 bg-gray-600 text-white p-4 text-3xl">Name: {data.name} <br /><div><a href={data.html_url}>Vist Github</a></div></div>
   

    </div>
    // </div>
  )
}

export default Github