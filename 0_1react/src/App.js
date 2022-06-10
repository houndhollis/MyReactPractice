import './App.css';
import DiaryEditor from './DiaryEditor';
import React,{useState,useRef} from "react"
import DiaryList from './DiaryList'



function App() {


const [data,setData] = useState([])

const dataId = useRef(0);

const onCreate = (name,content) =>{
   const created_date = new Date().getTime()
   const newItem ={
     name,
     content,
     created_date,
     id:dataId.current
   }
   dataId.current += 1;
   setData([newItem,...data])
}

const handelDelet = (e) =>{
   const newData = data.filter((it)=>it.id !== e)
   setData(newData)
}

const onEdit = (targetId,newContent) =>{
  setData(  
     data.map((it)=>
      it.id === targetId ? {...it,content:newContent}:it  
    )
  )
}
 
  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} handelDelet={handelDelet} onEdit={onEdit}/>
    </div>
  );
}
export default App;

