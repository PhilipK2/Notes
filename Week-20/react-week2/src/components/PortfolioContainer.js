import React, { Component } from "react";
import Navpills from "./Navpills";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const MyComp = (props) => {
  if (props.page == "Home"){
    return <Home />
  } else if (props.page == "About"){
    return <About />
  } else if (props.page == "Blog"){
    return <Blog />
  }else if (props.page == "Contact"){
    return <Contact />
  }
};

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <MyComp 
        page ={this.state.currentPage}
        />
      </div>
    );
  }
}

export default PortfolioContainer;
