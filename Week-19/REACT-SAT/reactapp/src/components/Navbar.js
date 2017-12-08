import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const styles = {
  panel: {
    background: "green",
    float: "right"
  },
  heading:{
    background: "green"
  }
};
const Navbar = () => (
  <div style = {styles.heading}>
  <nav className="navbar" style = {styles.panel}>
    <a href="/">Welcome</a>
  </nav>
  </div>
);

export default Navbar;
