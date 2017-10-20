import React, { Component } from "react";
import Board from "./Board";

import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      squares: [],
      next: true
    };
    this.lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  handleClick = i => {
    const squares = this.state.squares;
    const player = this.state.next ? "X" : "O";
    squares.push(player);
    this.setState({
      squares: squares,
      next: !this.state.next
    });
  };

  isWinner = squares => {
    let winner = null;
    this.lines.forEach((line, i) => {
      const [a, b, c] = this.lines[i];
      const success = (squares[b] === squares[a]) && (squares[c] === squares[a]);
      if (success) {
        winner = squares[a];
      }
    });
    return winner;
  };

  render() {
    const squares = this.state.squares;
    const winner = this.isWinner(squares);

    let status;
    if (winner) {
      status = "The Winner is: " + winner;
    } else {
      status = "Next player: " + (this.state.next ? "X" : "O");
    }

    return (
      <section>
        <div className={winner ? 'alert alert-success' : 'alert alert-info'}>{status}</div>
        <Board squares={squares} onClick={i => this.handleClick(i)} />
      </section>
    );
  }
}

export default App;
