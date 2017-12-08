import React from "react";

const List = props => (
  <ul className="list-group">
    {/* Using the map method, render one li element displaying the text property of
    each grocery object. */}
    {props.groceries.map(item => (
      <li className = "list-group-item" key = {item.id}>
      {item.name+item.purchased}
      </li>
    ))}
  </ul>
);

export default List;
