import { useState } from 'react'
import styled from 'styled-components'
// 전체 모달 박스
// 모달 버툰
// 모달 백그라운드 
// 모달 창
export const ModalContainer = styled.div`
  height: 100%;
  border:1px solid black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalBlack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`
export const ModalButton = styled.button`
  padding: 25px 20px;
  border-radius: 20px;
  border-style:none;
  background-color: #4000c7;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`
export const ModalView = styled.div`
  width: 350px;
  height: 150px;
  position: absolute;
  background: #fff;
  text-align: center;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  >div{
      margin-top: 30px;;
      font-size: 1.2rem;
      cursor: pointer;
  }
  >p{  
      margin-top: 20px;
      font-size: 1.8rem;

  }
`

const Modal = () => {
    const [isOn,setIsOn] = useState(false)
    
    const handleModal = () => {
        setIsOn(!isOn)
    }
    return (
    <>
     <ModalContainer >
         <ModalButton onClick={handleModal}>
             {isOn?'Opened':'Open Modal!'}
         </ModalButton>
      {isOn?
      <ModalBlack onClick={handleModal}>
      <ModalView>
      <div onClick={handleModal}>X</div>
      <p>Hello My Modal !</p>
      </ModalView>
      </ModalBlack>
      :''}
     </ModalContainer>
    </>
  )
}

export default Modal