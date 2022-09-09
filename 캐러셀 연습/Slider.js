import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import dog1 from './img/dog1.jpg'
import dog2 from './img/dog2.jpg'
import dog3 from './img/dog3.jpg'
import Slide from './Slide'

const TOTAL_SLIDES = 2 //전체 슬라이드 개수 
// 배열이 0부터 시작해서 2까지 인덱스니 토탈에 2넣어준다

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };


  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);


  return (
    <Container>
      <Text>
        <h1>연습용 슬라이더</h1>
        <p>{currentSlide+1} 번쨰 사진</p>
      </Text>
      <SliderContinaer ref={slideRef}>
        <Slide img={dog1}/>
        <Slide img={dog2}/>
        <Slide img={dog3}/>
      </SliderContinaer>
      <Center>
        <Button onClick={PrevSlide}>prev</Button>
        <Button onClick={NextSlide}>next</Button>
      </Center>
    </Container>
  )

}


export default Slider

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  height: 600px;
  overflow: hidden; 
  // 선넘어간 이미지 숨기기 위한 overflow 히든처리
`

const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin:2em 2em;
  color: burlywood;
  border-radius: 10px;
  border: 1px solid burlywood;
`

const SliderContinaer = styled.div`
margin: 0 auto;
margin-bottom: 3em;
display: flex;
`

const Text = styled.div`
  text-align: center;
  color: burlywood;
  p{
    color: #fff;
    font-size:20px;
    display: inline-block;
    background-color: burlywood;
    border-radius: 50px;
    padding: 0.5em 1em;
  }

  `
  const Center = styled.div`
    text-align: center;
    cursor: pointer;
  `