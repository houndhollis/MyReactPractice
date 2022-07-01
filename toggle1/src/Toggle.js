import React,{useState} from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: relative;
  width: 100vh;
  margin: 100px auto;
  
  > .toggle_hyewon{
    position: absolute;
    width: 200px;
    height: 100px;
    transition: 0.5s;
    background-color: #fa5252;
    border-radius: 50px;
    &.toggle_on{
    background-color: #66d9e8;
    }
  }
  > .circle_hyewon{
    position: absolute;
    top: 5px;
    left: 5px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: white;
    transition: 0.5s;
      &.toggle_on{
    left: 105px;
  }

  }
`


function Toggle() {
const [isOn, setIson] = useState(false)

const toggleHandler = () =>{
    
    console.log('혜원')
    setIson(!isOn)
}
  return (
    <div>
      <ModalContainer onClick={toggleHandler}>
          <div className={`toggle_hyewon ${isOn?'toggle_on':'' }`}></div>
          <div className={`circle_hyewon ${isOn?'toggle_on':'' }`}></div>
      </ModalContainer>
    </div>
  )
}

export default Toggle