import React, { useState } from "react";
import {Link } from "react-router-dom";

const Edit = ({ onCreate }) => {
  const [state,setState] = useState({
    title:'',
    content:'',
 })

 const handleState=(e)=>{
   setState({
     ...state,
     [e.target.name]:e.target.value,
   })
 }
 
 const handleSubmit = ()=>{
  onCreate(state.title,state.content)
  setState({
    title:'',
    content:'',
  })
 }

  return (
    <div className="DiaryEdit">
        <h1 className='flux'> The Daily Diary</h1>
       <div>
            <input placeholder="제목적어주세요!" name='title' type="text" value={state.title} onChange={handleState}></input>
       </div>
       <div>
           <textarea placeholder="내용을 입력해주세요!" name='content' type='text' value={state.content} onChange={handleState}></textarea>
       </div>
       <Link to='/'> <button  onClick={handleSubmit}>기록하기</button></Link>
    </div>
   )
};

export default Edit;
