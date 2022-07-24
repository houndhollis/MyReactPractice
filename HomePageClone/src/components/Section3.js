import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
width: 100%;

background-color: #F2F5FA;
 .inner{
     padding: 100px 0;
     text-align: center;
     span{
        /* line-height: 15px; */
         color: #333;
         font-style: normal;
         font-size: 45px;
         font-weight: bold;
     }
     .p_box{
         margin-top: 30px;
     }
     p{
        line-height: 8px;
        color:#666;
        font-size: 20px;
        font-weight: bold;
        
        
     }
     img{
         width: 100%;
         margin-top: 100px;
     }
}
`

const Section3 = () => {
  return (
    <Section>
         <div className='inner'>
            <span>감각적인 디자인 스킨 무료로 사용해 보세요</span>
            <div className='p_box'>
            <p>업종, 취향에 따라 원하는 스킨을 선택해</p>
            <p>나만의 반응형 홈페이지와 쇼핑몰을 쉽고 빠르게 만들 수 있습니다.</p>
            </div>
            <img src='https://www.clickn.co.kr/images/main/img_skins.png'/>
        </div>
    </Section>
    
  )
}

export default Section3