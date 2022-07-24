import React from 'react'
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const Item = ({id,overview,title,backdrop_path,poster_path}) => {

  return (
    <div className='Item'>
        <img src={`${IMAGE_BASE_URL}w1280/${poster_path}`}/>
       

    </div>
  
        
  )
}

export default Item