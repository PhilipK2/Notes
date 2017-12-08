import React from "react";

// Create a new component named "Math"
const Math = (props) => {
  if (props.op =="+"){
    return <span>{props.oprnd1+props.oprnd2}</span>;
  }
  if (props.op == "-"){
    return <span>{props.oprnd1-props.oprnd2}</span>;
  }
  if (props.op == "*"){
    return <span>{props.oprnd1*props.oprnd2}</span>
  }
  if (props.op == "/"){
    return <span>{props.ornd1/props.oprnd2}</span>
  }
}
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
const Calculator = () => (
  <div>
    <p>
      19 + 341 = <Math op="+" oprnd1={19} oprnd2={341}/>
    </p>
    <p>
      42 - 17 = <Math op="-" oprnd1={42} oprnd2={17}/>
    </p>
    <p>
      100 * 3 = <Math op="*" oprnd1={100} oprnd2={3}/>
    </p>
    <p>
      96 / 4 = <Math op="/" oprnd1={96} oprnd2={4}/>
    </p>
  </div>
);

export default Calculator;
