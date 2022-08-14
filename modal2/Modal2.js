import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
position: absolute;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;

`;

export const ModalBackdrop = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
 position: absolute;
 background-color:rgba(0,0,0,0.3);
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
  z-index: 100;
  
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
// TODO : Modal창 CSS를 구현합니다.
width: 300px;
height: 150px;
background-color: #fff;
border-radius: 12px;
text-align: center;
z-index: 101;

& span{
  display: inline-block;
  margin-top: 10px;
  cursor: pointer;
}
& p{
 color:#4000c7;
 font-size: 24px;
 margin-top: 35px;
 font-weight: 700;
 letter-spacing: -0.5px;
 
}
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen)
  };
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}
        // TODO : 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
        >
          {isOpen?'Opened!':"Open Modal"}
          {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현해야 합니다. */}
        </ModalBtn>
        {isOpen?<ModalBackdrop onClick={openModalHandler}>
        <ModalView onClick={stopPropagation}>
        <span onClick={openModalHandler}>X</span>
        <p>모달업그레이드2 버전 </p>
        </ModalView>
        </ModalBackdrop>:''}
        {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현해야 합니다. */}
      </ModalContainer>
    </>
  );
};
