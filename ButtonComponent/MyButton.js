import React from 'react'

const MyButton = ({text,type,onClick}) => {

const btnType = ['positive','negative'].includes(type)? type:'default'
// 만약 type으로 포함되지 않은것이 오면 default로 만들어 준다.

  return (
   <button className={['MyButton',`MyButton_${btnType}`].join(' ')} onClick={onClick}>
       {text}
   </button>
  )
}

MyButton.defaultProps = {
  type: "default"
}

export default MyButton