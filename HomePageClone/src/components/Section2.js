import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
width: 100%;
/* height: 1138px; */
background-color: #fff;
 .inner{
     padding: 100px 50px;
     text-align: center;
     span{
        /* line-height: 15px; */
        background: linear-gradient(to right, #1972e3, #30e2ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
         font-style: normal;
         font-size: 45px;
         font-weight: bold;
     }
     p{
        line-height: 10px;
        color:#666;
        font-size: 20px;
        font-weight: bold;
     }
     .youtube{
         width: 95%;
         height: 80vh;
         margin-top: 50px;
         border-radius: 30px;
         opacity: 1;
         transition: 0.5s;
         animation: slide 0.3s ease-out;
     }
     .youtube.on{
         opacity: 0;
         width: 80%;
     }
     
    }

`



const Section2 = ({scrollY}) => {

    console.log(scrollY)
  return (
    <Section>
        <div className='inner'>
            <span>클릭만 하면 손쉽게 완성되는</span><br/>
            <span>나만의 홈페이지와 쇼핑몰</span>
            <p>원하는 스킨을 고르고,영역을 클릭해 블록을 추가합니다.</p>
            <p>에디터 기능을 통해 간편하게 적용하면 나만의 웹사이트가 바로 완성됩니다.</p>
            <iframe 
            className={scrollY>540?'youtube':'youtube on'}
            src="https://www.youtube.com/embed/5m8T76cLU9k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
    </Section>
  )
}

export default Section2