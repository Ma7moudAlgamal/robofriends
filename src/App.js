import React, { Component } from "react";
import CardList from "./cardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { robots: [], searchfield: "" };
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
    // his.setState({robots: filterdRobots});
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const filterdRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1 className="title tc">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <div className="top">
          <h1 className="title">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <CardList robots={filterdRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
