import React from 'react'
import {useState} from 'react';

const DiaryEdit = ({onCreate}) => {

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
             <input name='title' type="text" value={state.title} onChange={handleState}></input>
        </div>
        <div>
            <textarea name='content' type='text' value={state.content} onChange={handleState}></textarea>
        </div>
        <button  onClick={handleSubmit}>기록하기</button>
     </div>
    )
}

export default DiaryEdit