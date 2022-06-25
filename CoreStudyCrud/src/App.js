import './App.css';
import {useState,useRef} from 'react'
import DiaryEdit from './DiaryEdit';
import DiaryList from './DiaryList';


// App 부모 
// 에디터(이모) , 리스트(엄마) , 아빠는 x 아이템기준으로 리스트는 엄마고 아빠는 없고 할아버지는 앱.js
// 아이템(나)은 리스트의 자식 

function App() {

const [data,setData] =useState([])
const dataId = useRef(1)

const onCreate = (title,content) =>{
  const created_data = new Date().getTime()
  const newData = {
    title,
    content,
    created_data,
    id:dataId.current,
  }
  dataId.current += 1;
  setData([newData,...data])
}

const onRemove =(e)=>{
  const newData = data.filter((it)=>it.id !== e)
  setData(newData)
}

const onEdit =(targetId,newContent) =>{
  setData(
    data.map((it)=>
    it.id === targetId ? {...it,content:newContent} : it ))
}

  return (
    <div className="App">
     
      <DiaryEdit onCreate={onCreate}/>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default App;
