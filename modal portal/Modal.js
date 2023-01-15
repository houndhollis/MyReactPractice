import React from 'react'
import styled from 'styled-components'
import Portal from './Portal'

const Overlay = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Dim = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);

`
const Container = styled.div`
    max-width: 456px;
    position: relative;
    width: 100%;
`


const Modal = ({children,isOpen,onClose,selector}) => {

  return (
    <>
        {
            isOpen ? (
                <Portal selector={selector}>
                    <Overlay>
                        <Dim onClick={onClose}/>
                        <Container>{children}</Container>
                    </Overlay>
                </Portal>
            ) : null
        }
    </>
  )
}

export default Modal