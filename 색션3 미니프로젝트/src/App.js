import "./App.css";
import ItemList from "./page/ItemList";
import Edit from "./page/Edit";
import Basicbutton from "./component/Basicbutton";
import Login from "./page/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useRef } from "react";
const initailData = [
  { 
    id:3,
    title:'휴가',
    content: '7월 20일 휴가 쓰기',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:2,
    title:'공부 5시간 이상하기',
    content: 'Js,React공부하기',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:1,
    title:'운동',
    content: '자전거 30분 이상 타기!',
    createdAt: new Date().toLocaleString()
  },
]
const App = () => {
  const [item, setItem] = useState(initailData);
  const nextId = useRef(0);

  const onCreate = (title, content) => {
    const newdiary = {
      title: title,
      content: content,
      createdAt: new Date().toLocaleDateString(),
      id: (nextId.current += 1),
    };

    setItem([newdiary, ...item]);

    console.log(item); // 첫번째 ㄷㅔ이터가 안담겨용
  };

  const onDelete = (itemId) => {
    console.log("삭제버튼 눌림 " + itemId);
    const filtered = item.filter((el) => el.id !== itemId);
    
    // if(window.confirm){

    // }
    setItem(filtered);
  };

  const onUpdate = (content, title, id) => {
    setItem(
      item.map((el) =>
        el.id === id ? { ...el, content: content, title: title } : el
      )
    );
    console.log(item);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/edit">
            <Basicbutton text={"글쓰기"} type={"edit"}></Basicbutton>
          </Link>

          <Link to="/login">
            <Basicbutton text={"로그인"} type={"login"}></Basicbutton>
          </Link>
        </header>

        <Link to="/">
          <div className="logoTitle">Todo 꼭 하자!!</div>
        </Link>

        <Routes>
          <Route path="/" element={<ItemList item={item} onDelete={onDelete} onUpdate={onUpdate} />}/>
          <Route path="/edit" element={<Edit onCreate={onCreate} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
