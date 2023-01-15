import {useState,useEffect} from 'react'
import styled from 'styled-components'

const Base = styled.div`
`
const Container = styled.div`
    position: relative;
`

const ArrowButton = styled.button`
    position: absolute;
    top: 50%;
    z-index: 1;
    padding: 8px 12px;
    font-size: 48px;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    /* border: none; */
    margin: 0;
    cursor: pointer;
    left: ${(props)=>props.left? "0%" : "95%" };
`
const CarouselList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    overflow: hidden;
`
const CarouselListItem = styled.li`
    width: 100%;
    flex: 1 0 100%;
    transform: translateX(-${(props) => props.number * 100}%);
    transition: 200ms ease;
    > img {
        width: 100%;
        height: fit-content;
    }
`
const NavButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: black;
    opacity: ${(props)=>props.boolean? 0.3 : 0.1 };
    border-radius: 100%;
    cursor: pointer;
`
const NavItem = styled.li`
    display:inline-block;
    & + & {
        margin-left: 4px;
    }
`
const Nav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

const banners = ['https://via.placeholder.com/400/123','https://via.placeholder.com/600/321','https://via.placeholder.com/600/13232'];

const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [isFocus, setIsFocus] = useState(false)

    const handleNext = () => setActiveIndex((prev)=>(prev + 1) % banners.length)

    const handlePrev = () => setActiveIndex((prev)=>(prev - 1 + banners.length) % banners.length)
    
    const goTo = (idx) => setActiveIndex(idx)

    const handleEnter = () => setIsFocus(true)
    const handleLeave = () => setIsFocus(false)
    useEffect(()=>{
        let interval;
        if(!isFocus){
            interval = setInterval(handleNext,3000)
        }

        return () => {
            clearInterval(interval)
        }
    },[isFocus])

  return (
    <Base>
        <Container onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <ArrowButton onClick={handlePrev} left>{'<'}</ArrowButton>
            <CarouselList>
                {banners.map((item,idx)=>(
                    <CarouselListItem number={activeIndex} key={idx}>
                        <img src={item}/>
                    </CarouselListItem>
                ))}
            </CarouselList>
            <ArrowButton onClick={handleNext} rigth>{'>'}</ArrowButton>
        </Container>
        <Nav>
            {Array.from({length:banners.length}).map((_,idx)=>(
                <NavItem key={idx} onClick={(()=>goTo(idx))}>
                    <NavButton boolean={activeIndex === idx}/>
                </NavItem>
            ))}
        </Nav>
    </Base>
  )
}

export default Carousel