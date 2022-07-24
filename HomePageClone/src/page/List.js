import React from 'react'
import Item from './Item'

const List = ({data}) => {
    console.log(data)
  return (
    <div className='List'>
        <span>지금 뜨는 영화</span>
        <div className='List_container'>
            {data.map((it)=>(
                <Item key={it.id} {...it}/>
            ))}
        </div>
    </div>
  )
}

export default List