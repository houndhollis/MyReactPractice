import React,{useState ,useRef} from "react"



const DiaryEditor = ({onCreate}) =>{
    const nameInput = useRef()
    const contentInput = useRef()  // 여기부분은 Ref 사용 입니다.

    const [state,setState]=useState({
        name: "",
        content: "",
    })

    const handleState = (e) =>{
        setState({
            ...state, // ""공백처리
            [e.target.name]:e.target.value, //값 씌우기
        })
    }
    const handleSubmit=()=>{
        if(state.name.length<1){
            nameInput.current.focus()
            return
        }
        onCreate(state.name,state.content)
        alert("저장성공")
        setState({
        name: "",
        content: "",
    })
 
       
    }
    return <>

        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input ref={nameInput} value={state.name} name="name" onChange={handleState}></input>
            </div>
            <div>
                <textarea ref={contentInput} value={state.content} name="content" onChange={handleState}></textarea>
            </div>
            <div>
                <button onClick={handleSubmit}>저장하기</button>
            </div>
        </div>
    </>
}
export default DiaryEditor