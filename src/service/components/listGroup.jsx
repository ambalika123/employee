import React, { Component } from "react";

const ListGroup = (props) => {
  //object destructuring
  //we are extracting the values from props object
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          //accessing properties dynamically
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? " list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
//we are using these properties so that we dont have to depend on genre
//and we can reuse this listgroup with any kind of list
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default ListGroup;
