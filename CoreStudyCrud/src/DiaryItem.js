import React, { useState } from 'react'

const DiaryItem = ({id,title,content,created_data,onRemove,onEdit}) => {
      
      const [isEdit , setIsEdit] = useState(false)
      const [newContent,setNewContent] = useState(false)
      const [localContent , setLocalContent] = useState(content)

      const toggleEdit = () => {
        setIsEdit(!isEdit)
      }

      const toggleContent = () => {
        setNewContent(!newContent)
        console.log('눌러짐')
      }

      const handleDelet =()=>{
        if(window.confirm(`${id} 번째 일기를 삭제 하시겠습니까?`)){
          onRemove(id)
        }
      }
      const handleCancle =()=>{
        setIsEdit(!isEdit)
        setLocalContent(content)
      }
      const handleEdit = () =>{
        setIsEdit(!isEdit)
        onEdit(id,localContent)
      }


    return <div className="DiaryItem">
    <div className="info">
        <span onClick={toggleContent}>제목 : {title} 
        </span>
        <br></br>
        <span className="date">{new Date(created_data).toLocaleString()}</span>
        <div>
              {newContent?<>
              <div className="DiaryItem_content">
                {isEdit?
                <textarea value={localContent} 
                      onChange={(e)=>{
                    setLocalContent(e.target.value)
                }}></textarea>:<>{content}</>}
              </div>
              <div>
                {isEdit?<>
                <button onClick={handleCancle}>취소하기</button>
                <button onClick={handleEdit}>저장하기</button>
                </>:<>
                <button onClick={handleDelet}>삭제하기</button>
                <button onClick={toggleEdit}>수정하기</button>
                </>}
             </div>
            </>:<>
            </>}
        </div>
    </div>
</div>
}

export default DiaryItem




// {
  /* <div className="content">
            {isEdit?
            <textarea value={localContent} 
                      onChange={(e)=>{
                    setLocalContent(e.target.value)
            }}></textarea>:<>{content}</>}
        </div>
        <div>
            {isEdit?<>
            <button onClick={handleCancle}>취소하기</button>
            <button onClick={handleEdit}>저장하기</button>
            </>:<>
            <button onClick={handleDelet}>삭제하기</button>
            <button onClick={toggleEdit}>수정하기</button>
            </>}
        </div> */
      // }