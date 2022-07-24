import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
height: 72px;
position: sticky;
top: 0;
background-color: #fff;
padding: 0 11%;
align-items: center;
cursor: pointer;

.Header_main{
    display: flex;
    font-size: 1rem;
    
    .Header_a{
        display: inline-block;
        height: 72px;
    }
    .Header_ul{
        display: flex;
        list-style: none;
        letter-spacing: -.05em;
        color:#333;
        font-weight: 700;
        line-height: 72px;
        li{
            margin-left: 15px;
            cursor: pointer;
            a{
                color:#333;
                text-decoration: none;
            }
        }

        /* 헤더 기능소개 부분 */
        .Header_hidden >li:hover{
            pointer-events: all;
            color: #0066ff;
            font-weight: 700;
            opacity: 1;
        }
        .Header_a:hover{
            .Header_hidden{
                color:#fff;
                opacity: 1;
                transition: 0.5s;
                pointer-events: all;
                
            }
        }
    }
    .Header_hidden{
        font-weight: 500;
        pointer-events: none;
        opacity: 0;
        list-style: none;
        position: absolute;
        border: 1px solid;
        background-color: #454c55;
        color: #fff;
        display: flex;
        flex-direction: column;
        width: 130px;
        height: 126px;
        padding: 30px;
        left: 14%;
        top: 60px;
        border-radius: 10px;
        li{
            margin-top: -40px;
            
        }
    }
}
/* 헤더 버튼 영역 */
.Header_sub{
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -.05em;
    a{
        color:#0066ff;
        margin-right: 15px;
    }
    button{
        cursor: pointer;
        height: 40px;
        border-style: none;
        font-size: 1.07em;
        border-radius: 6px;
        letter-spacing: -.05em;
        font-weight: 500;
    }
    .sub_btn1{
        width: 70px;
        border: 1px solid #e4e4e4;
        margin-right: 10px;
        background-color: #fff;
    }
    .sub_btn2{
        background-color: #0066ff;
        width: 140px;
        color: #fff;
    }
}
`

const Header = () => {
  return (
    <HeaderContainer>
        <div className='Header_main'>
            <img onClick={()=>{
                window.location.assign('http://localhost:3000/')
            }} src='https://www.clickn.co.kr/images/common/logo.svg'/>
            <ul className='Header_ul'>
                <li>
                    <a className='Header_a' href='/'>
                        <span>기능소개</span>    
                    <ul className='Header_hidden'>
                        <li>홈페이지 기능</li>
                        <li>쇼핑 기능</li>
                        <li>디자인 기능</li>
                        <li>회원 기능</li>
                        <li>설정 기능</li>
                    </ul>
                    </a>
                </li>
                <li>디자인 스킨</li>
                <li>가격안내</li>
                <li>고객사례</li>
                <li>고객센터</li>
            </ul>
        </div>
        <div className='Header_sub'>
            <a href='/'>MY클릭엔</a>
            <button className='sub_btn1'>로그인</button>
            <button className='sub_btn2'>무료로 시작하기</button>
        </div>
    </HeaderContainer>
  )
}

export default Header