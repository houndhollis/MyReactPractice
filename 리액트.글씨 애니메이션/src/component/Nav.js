import styled from 'styled-components';
import '../App.css';
import { Link} from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .logo_title{
    color:black;
    font-size: 2.5rem;
    font-weight: 600;
    cursor: pointer;

  }
  >.logo_nav{
    width: 500px;
    display: flex;
    line-height: 40px;
    justify-content: space-around;
    cursor: pointer;
    
  }
  >.logo_nav > button{
    border: none;
    width: 120px;
    height: 40px;
    background-color: #53b6f4;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    color:#fff;
    border-radius: 5px;
    transition: 0.7s;
  }
  >.logo_nav >button:hover{
    background-color: #fff;
    color:#53b6f4;
    border : 1px solid #53b6f4;
  }

 
`;

const StyledLink = styled(Link)`
 color: #53b6f4;

 font-weight: 700;

`;

const Nav = () => {
  return (
    <>
      {/* <TopButton>
        <TopIcon></TopIcon>
      </TopButton> */}
      <div className="header">
        <Wrapper>

          <div className="logo_title">
           <StyledLink to='/'><div>Woong'Coffee</div></StyledLink>
          </div>

          <ul className='logo_nav'>
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
            <button>Sing up</button>
          </ul>
        </Wrapper>
      </div>
    </>
  );
};

export default Nav;
