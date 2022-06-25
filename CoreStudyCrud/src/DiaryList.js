import React from 'react'
import DiaryItem from './DiaryItem'

const DiaryList = ({diaryList,onRemove,onEdit}) => {
  return (
    <div className='DiaryList'>
        <h1 className='neon'>Diary List</h1>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div className='DiaryList_list'>
            {diaryList.map((it)=>(
                <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
            ))}
        </div>
    </div>
  )
}

export default DiaryList
