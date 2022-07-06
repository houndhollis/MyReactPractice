import { useState,useReducer } from 'react';



// reducer 스테이트를 업데이트
// 스테이트 업데이트를 위한 요구
// action - 요구의 내용
const reducer = (state,action) => {
  console.log('리듀서가 일을한다.',state,action) //리듀서가 일을한다. 0 undefined
  // return state + action.payload
  switch(action.type){
    case 'deposit' :
      return state + action.payload
    case 'out' :
      return state - action.payload
    default:
      return state
  }
}


function App() {
const [number,setNumber] = useState(0)
const [Money,dispatch] = useReducer(reducer, 0);

  return (
    <div >
      <div>
        <h2>useReducer 은행에 오신것을 환영합니다</h2>
        <p>잔고: {Money}원</p>
        <input
          type='number'
          value={number}
          onChange={(e)=>setNumber(parseInt(e.target.value))}
          step='1000'
        ></input>
        <button onClick={()=>{
          dispatch({type:'deposit', payload : number})
        }}>입금</button>
        <button onClick={()=>{
          dispatch({type:'out', payload : number})
        }}>출금</button>
      </div>
    </div>
  );
}

export default App;
