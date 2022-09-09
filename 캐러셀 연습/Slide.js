import React from 'react'
import styled from 'styled-components'

const Slide = ({img}) => {
  return (
    <IMG>
      <img src={img}/>
    </IMG>
  )
}

export default Slide

const IMG = styled.div`
& img{
  width: 500px;
  height: 300px;
  z-index: 100;
}
`