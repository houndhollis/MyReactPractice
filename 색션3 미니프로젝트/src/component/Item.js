import React, { useState } from "react";
import "./Item.css";

const Item = ({ item, onDelete, onUpdate }) => {
  const [updateClick, setUpdayeClick] = useState(false);
  const [originContent, setOriginContent] = useState(item.content);
  const [originTitle, setOriginTitle] = useState(item.title);

  console.log(item);
  const handleDelete = () => {
    console.log("delete");
    onDelete(item.id, item.title);
  };

  const updateBtnClick = (e) => {
    setUpdayeClick(true);
  };

  const handleCancel = () => {
    setUpdayeClick(false);
  };

  const handleChangeContent = (e) => {
    setOriginContent(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setOriginTitle(e.target.value);
  };

  const handleUpdateSubmit = () => {
    setUpdayeClick(false);
    console.log(item);
    onUpdate(originContent, originTitle, item.id);
  };

  return (
    <div className="Item">
      {!updateClick ? (
        <div className="item">
          <p className="itemTitle">{originTitle}</p>
          <p className="itemContent">{originContent}</p>
          <div className="contentBottom">
            <p className="itemCreatedAt">{item.createdAt}</p>
            <div className="buttonBox">
              <button onClick={handleDelete} className="circleButton delete">
                삭제
              </button>
              <button onClick={updateBtnClick} className="circleButton update">
                수정
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="item">
          <input type="text" value={originTitle} onChange={handleChangeTitle} />
          <input
            type="text"
            value={originContent}
            onChange={handleChangeContent}
          />
          <p className="itemCreatedAt">{item.createdAt}</p>
          <button onClick={handleCancel} className="circleButton cancal">
            취소
          </button>
          <button onClick={handleUpdateSubmit} className="circleButton append">
            적용
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
