import './Coffee.css'
import React,{useEffect,useState} from 'react'
import Canvas from '../component/Canvas';


const Coffee = () => {


  const [scrollY, setScrollY] = useState(0);

const handleScroll = () => {
  const scrollPosition = window.pageYOffset;
  setScrollY(scrollPosition)
};

useEffect( () => {
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, []);
console.log(scrollY)


  return (

    <div>
        <img className='back' src={process.env.PUBLIC_URL + `1.jpg`}/>
      <div  className={scrollY>420?'main_container on':'main_container'}>
        <p className='coffee_main a1'>Coffee is so Good</p>
        <p className='coffee_main a2'>咖啡是最棒的</p>
        <p className='coffee_main a3'>コーヒーは最高だ</p>
        <p className='coffee_main a4'>El café es lo mejor</p>
      </div>
      <img className='back1' src={process.env.PUBLIC_URL + `2.jpg`}/>
      <div  className={scrollY>500?'b_container':'b_container on'}>
        <p className='coffee_main b1'>최적의 시스템이 만들어준 최고의 한잔</p>
        <p className='coffee_main b2'>직접 설정한 최적화된 로스팅 포인트와 주문 후 당일 로스팅 SYSTEM 화사하고 산뜻한 느낌의 스페셜 티 깔끔하고 기분 좋은 맛</p>
      </div>
      <div className='heart'>
      <Canvas />
      </div>
    </div>
  )
}

export default Coffee