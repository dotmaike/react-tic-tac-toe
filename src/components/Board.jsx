import React from "react";
import Square from "./Square";

const Board = props => {
  function getSquareRows() {
    const squares = [];
    for (let i = 0; i < 9; i++) {
      squares.push(
        <Square
          key={i}
          value={props.squares[i]}
          onClick={() => props.onClick(i)}
        />
      );
    }
    const groupSize = 3;
    const rows = squares
      .map((item, i) => <div key={i} className="col-xs-4 col-sm-4 col-md-4">{item}</div>)
      .reduce((r, el, i) => {
        i % groupSize === 0 && r.push([]);
        r[r.length - 1].push(el);
        return r;
      }, [])
      .map((row, i) => <div key={i} className="row">{row}</div>);
    return rows;
  }
  return (
    <div>
      {getSquareRows()}
    </div>
  );
};

export default Board;
