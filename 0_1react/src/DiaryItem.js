import { useState , useRef} from "react"

const DiaryItem =({name,content,created_date,id,handelDelet,onEdit}) =>{
    const [reset,setReset] = useState(content)
    const [newEdit,setNewEdit] = useState(false)

    const toggleOnOff = () => setNewEdit(!newEdit)
   
    const handleRemove = () =>{
        if(window.confirm(`${name} 님의 일기를 삭제 할까요?`))
        handelDelet(id)
    }
    const resetInput = useRef()

    const handleQuitEdit = () =>{
        setNewEdit(false)
        setReset(content)
    }
    const handleEdit = () =>{
        if(reset.length < 5){
        return
        }else{
        resetInput.current.focus()
        onEdit(id,reset)
        toggleOnOff()
        }
    }

   return <div className="DiaryItem">
        <div className="info">
            <span>작성자:{name} </span>
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>                    
        <div className="content">{newEdit?<>
        <textarea ref={resetInput} value={reset} onChange={(e)=>{
            setReset(e.target.value)
        }}></textarea>
        </>:<>
        {content}
        </>
        }
        </div >
        <div className="button">
            {newEdit?<>
            <button onClick={handleQuitEdit}>취소하기</button>
            <button onClick={handleEdit}>저장하기</button>
            </>:<>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={toggleOnOff}>수정하기</button>
            </>
        }
        </div>
    </div>
}

export default DiaryItem

{/* <button className="button" onClick={handleRemove}>삭제하기</button>
<button className="button" onClick={toggleOnOff}>수정하기</button> */}