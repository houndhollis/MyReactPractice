import styled from 'styled-components';
import '../App.css';
import { Link} from 'react-router-dom';

const MainArea = styled.div`
  /* background-image: url('https://i.pinimg.com/564x/25/2a/85/252a8531ff0b79234be74178758db6da.jpg'); */

  max-height: 864px;
  height: 100vh;
  width: 100%;
  display: flex;


  padding: 8rem;
  justify-content: space-around;
  >.main_text{
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 330px;
    margin-bottom: 50px;
  }
  >.main_text >img{
    width: 200px;
    margin-left: 30px;
    margin-top: -6rem;
  }
  >.main_text >p {
   font-size: 17px;
   color:gray;
   text-align: left ;
  }
  >.main_text >button{
    width: 200px;
    height: 30px;
    margin-top: 20px;
    margin-left: 30px;
    border: 1px solid #00aaf9;
    background-color: #fff;
    color:#00aaf9;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 5px;
  }
  >.main_text >button:hover{
    background-color: #00aaf9;
    color: #fff;
  }
  >.main_box >.box > img{
    width: 45px;
  }

  
  >.main_box{
    display:  flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    width: auto;
    width: 456px;
    height: 360px;
  }
  >.main_box>.box:hover{
    transition: 0.3s;
    transform: scale(1.05);
  }
  >.main_box>.box {
    border-radius: 10px;
    width: 200px;
    height: 150px;
    padding: 10px;
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;


  }
  
  

  >.main_box>.box1{
    background-color: #00aaf9;
    color: #fff
  }
  >.main_box>.box2{
    background-color: #4f4f4f;
    color: #fff
  }
`;
  const StyledLink = styled(Link)`
    >.box{
    background-color: #00aaf9;
    border-radius: 10px;
    width: 200px;
    height: 150px;
    padding: 10px;
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
    color:white;
    }
    >.box:hover{
      transition: 0.3s;
      transform: scale(1.05);

    }
    >.box>img{
      width: 45px;
    }

  `;

const Render = () => {
  return (
    <>
      <MainArea>
        <div className="main_text">
          <img src='https://i.pinimg.com/564x/25/2a/85/252a8531ff0b79234be74178758db6da.jpg'/>
          <p>나만의 웹 페이지를 쉽고 빠르게 만들어 보고 싶으시지 않으신가요? '크몽'이 있습니다.</p>
          <button>Explore</button>
        </div>
        <div className='main_box '>
          <div className='box box2'>
            <img src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon1/ul-line.svg'/>
            <h2>LayOuts</h2>
            <p>좋은 원두 사는 방법에 대한 정보입니다.</p>
          </div>
          <div className='box box1'>
            <img src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon1/ul-award.svg'/>
            <h2>Awards</h2>
            <p>원두 수상 내역입니다.</p>
          </div>
          <StyledLink to='/coffee' >
            <div className='box box1'>
            <img src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon1/ul-coffee.svg'/>
            <h2>Cups of Coffee</h2>
            <p>커피는 역시 성수죠.</p>
            </div>
          </StyledLink>
          <div className='box box2'>
            <img src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon1/ul-plane-fly.svg'/>
            <h2>Projects</h2>
            <p>프로젝트 진행 하기 앞서 좋은 진행이란 무엇일까요?</p>
          </div>
        </div>
      </MainArea>
    </>
  );
};

export default Render;
