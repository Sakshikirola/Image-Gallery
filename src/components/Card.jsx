import React from 'react'

const Card = ({elem,loading}) => {
  if (loading) {
    return (
      <div className="w-44">
        <div className="h-40 w-44 bg-gray-800 rounded-xl animate-pulse"></div>
        <div className="h-4 w-24 bg-gray-700 rounded mt-3 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div>
      <a href={elem.url} target='_blank'>
       <div className='h-45 w-52 overflow-hidden rounded-xl'> 
        <img className='h-full w-full object-cover hover:scale-105 transition-transform duration-300' src={elem.download_url} alt="" /> 
       </div>
       <h2 className='font-bold text-lg'>{elem.author}</h2>  
      </a>
    </div>
  )
}

export default Card
