import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    const status = 'Next player: X';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Add items to order:</h1>
        </header>
        <p className="App-intro">
          <Screen/>
        </p>
      </div>
    );
  }
}

class MenuCatagory extends React.Component{
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
class Screen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"],
      order: [],
    };
  }
  render() {
    return (
      <div>
        <div className="status"></div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
  handleClick(i) {
    alert("Added item " + (i+1) + " to order");
    this.state.order.push(
      {order : [i + 1, 1]}
    );
  }
  renderSquare(i) {
    return (
      <MenuCatagory
        value={this.state.items[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
}

export default App;
