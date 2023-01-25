import React from "react";
import styled from 'styled-components'

const Input = ({...res}) => {
  return (
    <InputControll {...res}/>
  )
}

export default Input

const InputControll = styled.input`
  width: 100%;
  height: 30px;
  padding: 15px 10px;
  border: 1px solid #333;
  border-radius: 5px;
`