import React from "react";
import Item from "../component/Item";
import "./ItemList.css";

const ItemList = ({ item, onDelete, onUpdate }) => {
  return (
    <div className="ItemList">
      {item.map((el) => {
        return (
          <Item
            key={el.id}
            item={el}
            onDelete={onDelete}
            onUpdate={onUpdate}
          ></Item>
        );
      })}
    </div>
  );
};

export default ItemList;
