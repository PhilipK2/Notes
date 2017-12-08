import React from "react";

const name = "Phil";
const num1 = 4;
const thoughts = "is pretty damn neat";

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {num1} letters</h2>
        <h2>I think React {thoughts} </h2>
        <h2> here is my name without vowels: {name.replace(/[aeiou]/ig,'')}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
