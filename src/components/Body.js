import React, { Component } from "react";
import NavTabs from "./Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./body.css"

class Body extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handlePageRender = page => {
    if (this.state.currentPage === "Home") {
      return <Home />
    } else if (this.state.currentPage === "Contact") {
      return <Contact />
    } else if (this.state.currentPage === "About") {
      return <About />
    }
  }



  render() {
    return (
      <div className="wrapper">
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.handlePageRender()}
      </div>
    );
  }
}

export default Body;
