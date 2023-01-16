import React from 'react'



const XhrPract = () => {
  const [data,setData] = React.useState([])
  
  const url = 'https://jsonplaceholder.typicode.com/todos/'

  // open 메소드는 정보를 담는 용도
  // send 는 서버에 요청을 보내고 
  // xhr = new XMLHttpRequest 로 객체 생성 

  const getApi = function (url) {
    return new Promise((resolve,reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET",url);
      xhr.send();
      xhr.onprogress = (e) => {
        console.log(e.lengthComputable); // 진행상황 측적 가능 여부
        console.log(e.loaded); // 수행한 작업의 양
        console.log(e.total);  // 수행 중인 작업의 총량
      }
      
      xhr.onload = () => {
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.response))
        } else {
          reject(new Error(xhr.status))
        }
      }
    })
  }

  React.useEffect(()=>{
    getApi(url).then((it)=>setData(it.slice(0,10)))
  },[])
  console.log(data)
  
        return (
    <>
      {data.map((item)=>(
        <li key={item.id}>{item.title}</li>
      ))}
    </>
  )
}

export default XhrPract