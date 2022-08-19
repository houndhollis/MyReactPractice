import styled from 'styled-components'


const Button = ({text,type,onClick}) => {
    const types = ['red','green'].includes(type)? type:'default'
  return (
    <ButtonCom className={['myButton',`myButton_${types}`].join(' ')} onClick={onClick}>{text}</ButtonCom>
  )
}

Button.defaultProps = {
    type: "default"
  }
export default Button

// 스타일드 컴포넌트 
const ButtonCom = styled.button`
padding: 10px 30px;
border: none;
font-size: 18px;
white-space: nowrap;
border-radius: 5px;
font-weight: 700;
cursor: pointer;
&.myButton_red{
    background-color: red;
    color: #fff;
}
&.myButton_green{
    background-color: green;
    color:#fff
}
`