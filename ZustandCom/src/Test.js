import React from 'react'
import useStore from './store'

const Test = () => {

    const {increaseCount,decreaseCount,toggleIsDark} = useStore()

  return (
    <div>
    <button onClick={()=>increaseCount()}>테스트증가</button>
    <button onClick={()=>decreaseCount()}>테스트감소</button>
    <button onClick={()=>toggleIsDark()}>True&False</button>
    </div>
  )
}

export default Test