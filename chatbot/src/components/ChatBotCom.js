import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import styled from "styled-components";



const ChatBotCom = ({steps}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const userURL = 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65779d87017800001.png'
  const avatarURL = 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72'
  const handleOpen = () => {
    setIsOpen(!isOpen);
    document.querySelector('.rsc-header-title').textContent='자비스~👻'
    
  };
  return (
    <Bot>
      <div className={`chatbot ${isOpen ? "isOpen" : ""}`}>
        <ChatBot steps={steps} placeholder={'안녕하세요 코어스터디 입니다.'} botAvatar={avatarURL} userAvatar={userURL}/>
      </div>

      <a className={`chatBtn ${isOpen ? "smallBtn" : ""}`} onClick={handleOpen}>
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
        </svg>
      </a>
    </Bot>
  );
};

export default ChatBotCom;

const Bot = styled.div`
  .chatbot {
    position: absolute;
    bottom: 64px;
    right: 64px;
    transform: scale(0);
    transform-origin: right bottom;
    transition: transform 0.3s ease 0s;
    z-index: 200;
    .rsc-header {
      background: #007fff;;
      color: #fff;
      padding-left: 20px;
    }
    .rsc-ts-bubble{
        background-color:#007fff;
        font-weight: 600;
        letter-spacing: -0.5px;
        color: #fff;
    }
    .rsc-os-option-element{
        background-color: #fff;
        color: #007fff;
        cursor: pointer;
        box-shadow: rgb(0 0 0 / 15%) 0px 12px 24px 0px;
    }
    .rsc-os-options{
      text-align: center;
    }
  }

  .isOpen {
    transform: scale(1);
  }
  .chatBtn {
    height: 56px;
    width: 56px;

    position: fixed;
    right: 32px;
    bottom: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #007fff;
    border-radius: 100%;
    box-shadow: rgb(0 0 0 / 15%) 0px 12px 24px 0px;
    fill: rgb(255, 255, 255);

    transform: scale(1);
    transform-origin: right bottom;
    transition: transform 0.3s ease 0s;
    z-index: 100;
    cursor: pointer;
  }

  .smallBtn {
    transform: scale(0.5);
    fill: #007fff;
  }
`;