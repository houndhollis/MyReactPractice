import React,{useContext, useEffect, useState} from 'react'
import MyHeader from './../components/MyHeader'
import MyButton from '../components/MyButton';
import { DiaryStateContext } from '../App';
import DiaryList from '../components/DiaryList';


const Home = () => {
 
  const diaryList = useContext(DiaryStateContext)
  const [data,setData] = useState([])
  const [curDate,setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() +1}월`

  useEffect(()=>{
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime()
    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth()+1,
      0
    ).getTime()

    setData(diaryList.filter((it)=>firstDay<=it.date && it.date <= lastDay))
  },[diaryList,curDate])
   
  useEffect(()=>{
    console.log(data)
  },[data])


  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(),curDate.getMonth()+1,curDate.getDate())
    )
  }
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(),curDate.getMonth()-1,curDate.getDate())
    )
  }


  return (
      <div>
        <MyHeader headText={headText}
        leftchild={<MyButton text={'<'} onClick={decreaseMonth}/>}
        rightchild={<MyButton text={'>'} onClick={increaseMonth}/>}/>
        <DiaryList diaryList={data}/>
    </div>
  )
}

export default Home       