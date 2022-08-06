import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Edit = () => {

    const [searchParams,setSearchParams] = useSearchParams() //쿼리스트링

    const id = searchParams.get('id')
    console.log('id : ',id)

  return (
    <div>
        <h1>Edit</h1>
        <p>이곳은 일기수정 페이지 입니다.</p>
        <button onClick={()=>setSearchParams({who:'woong'})}>Qs 바꾸기</button>
    </div>
  )
}

export default Edit 