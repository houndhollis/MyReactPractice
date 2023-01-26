import React from 'react'
import { Star } from 'react-feather'
import './star.css'
import styled from 'styled-components'

const StarPoint = () => {

  const Array = [0,1,2,3,4]
  const [ score, setScore ] = React.useState([false, false, false, false, false])
  
  const sendReview = () => {
    let starLength = score.filter(Boolean).length
    console.log(starLength)
  }

  React.useEffect(() => {
    sendReview()
  },[score])

  const onChangeStar = idx => {
    let clickStates = [...score];
    for(let i = 0; i < 5; i++) {
      clickStates[i] = i <= idx ? true : false
    }
    setScore(clickStates)
  }

  return (
    <Stars className='starDiv'>
      {Array.map((el,idx)=>(
      <Star 
            className={score[el] && 'yellowStar'}
            key={idx}
            size='18'
            onClick={()=>onChangeStar(el)}/>
    ))}
    </Stars>
  )
}

export default StarPoint

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
