import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
width: 100%;
background-color: #31ACFE;
height: 740px;
    .Section_inner{
        padding: 0 8%;      
        display: flex;
        justify-content: space-between;
        img{
           width: 686px;
           height: 683px;
           margin-top: 47px;
        }
        .Section_main{

            display: flex;
            flex-direction:column;
            padding: 40px;
            margin-top: 130px;
            color: #fff;
            align-items: flex-start;
            
            h1{
                font-size:48px;
                font-weight: 900;
                white-space:nowrap;
                line-height: 0px;
            }
             p{
                font-size: 25px;
                white-space: nowrap;
            }
            button{
                border: 1px solid #fff;
                background-color: #31ACFE;
                color:#fff;
                border-radius: 6px;
                width: 170px;
                height: 50px;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                margin-top: 20px;
                transition: 0.5s;
            }
            button:hover{
                color:#31ACFE;
                background-color: #fff;
            }
        }
    }
`

const Section1 = () => {
  return (
    <Section>
    <div className='Section_inner'>
      <div className='Section_main'>
          <h1>홈페이지부터 쇼핑몰 까지</h1>
          <h1>모두 클릭엔으로</h1>
          <p>요즘 뜨는 웹 사이트를 만들고 싶다면? 클릭엔 해보세요!</p>
          <button>자세히보기</button>
      </div>
      <img src='https://www.clickn.co.kr/images/banner/mainbnr_220706.png'/>
    </div>
    </Section>
  )
}

export default Section1