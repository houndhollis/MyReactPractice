import {useRef, useState , useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'


const List = styled.ul`
    overflow: hidden scroll;
    list-style: none;
    margin: 0 ;
    padding: 0 ;
    width: 100%;
    height: 100vh;
`
const Item = styled.li`
    font-size: 24px;

`

const InfiScroll = () => {

    const currentPageRef = useRef(0)
    const listRef = useRef(null)

    const [passengers,setPassengers] = useState([])
    const [isLast, setIsLast] = useState(false) // 마지막 페이지 인지 여부 확인
    const [isScrollBottom , setIsScrollBottom] = useState(false) // 스크롤이 최하단에 와있는지 

    const getPassengers = async (init) => {
        const params = { page: currentPageRef.current , size: 30 };
        
        try {
            const res = await axios.get('https://api.instantwebtools.net/v1/passenger',{params})
            
            const passengers = res.data.data;
            const isLast = res.data.totalPages === currentPageRef.current

            init? setPassengers(passengers) : setPassengers((prev) => [...prev,...passengers])
            setIsLast(isLast)


        } catch (e) {
            console.log(e)
        }
    }

    useEffect (() => {
        getPassengers(true)
    }, [])

    const handleScroll = () => {

        if(listRef.current){
            const { scrollHeight , offsetHeight , scrollTop } = listRef.current
            
            const offset = 50;
            console.log(scrollHeight,offset,scrollTop)

            setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset) 
            // true 시 스크롤이 최하단에 왔다고 판단 
        }
    }

    useEffect (() => { // 최하단일 경우 
        if(isScrollBottom){
            currentPageRef.current += 1;

            !isLast && getPassengers()
        }
    },[isScrollBottom,isLast])

  return (
    <div>
        <List ref={listRef} onScroll={handleScroll}>
            {passengers.map((passenger => (
                <Item key={passenger._id}>{passenger.name}</Item>
            )))}
        </List>
    </div>
  )
}

export default InfiScroll