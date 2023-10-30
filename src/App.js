// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// export default App;
// import { useState } from 'react';

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function Board({ xIsNext, squares, onPlay }) {
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = 'X';
//     } else {
//       nextSquares[i] = 'O';
//     }
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = 'Winner: ' + winner;
//   } else {
//     status = 'Next player: ' + (xIsNext ? 'X' : 'O');
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// export default function Game() {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = 'Go to move #' + move;
//     } else {
//       description = 'Go to game start';
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }


// import { Textfit } from "react-textfit";
// import React, { useState } from "react";

// function Wrapper({children}) {
//   return <div classname="wrapper">{children}</div>
// }
// function Screen({ value }) {
//   return (
//     <Textfit className="screen" mode="single" max={70}>
//       {value}
//     </Textfit>
//   );
// };

// function ButtonBox({ children }){
//   return <div className="buttonBox">{children}</div>;
// };

// function Button({ className, value, onClick }) {
//   return (
//     <button className={className} onClick={onClick}>
//       {value}
//     </button>
//   );
// };

// const btnValues = [
//   ["C", "+-", "%", "/"],
//   [7, 8, 9, "X"],
//   [4, 5, 6, "-"],
//   [1, 2, 3, "+"],
//   [0, ".", "="],
// ];

// export default function Calculator(){
//   const [calc, setCalc] = useState({
//     operation:"",
//     num:0,
//     res:0
//   })

//   const calculate = (a, b, op) =>
//     op === "+" ? a + b :
//     op === "-" ? a - b :
//     op === "X" ? a * b :
//     op === "%" ? a % b:
//     a / b;

//   function clickHanlder(e){
//     e.preventDefault()
//     const value = e.target.innerHTML
//     // determine input type
//     if (!isNaN(value)){
//       setCalc({...calc,
//         num:Number(value)
//       })
//     } else if (value==="C"){
//       setCalc({
//         operation:"",
//         num:0,
//         res:0
//       })
//       console.log("reset")
//     } else if (value === "="){
//       console.log(calc.operation + calc.num)
//       if ((calc.operation === "/") && (calc.num == 0)){
//         let val = "Cant divide by 0"
//         setCalc({
//           operation:"",
//           num:val,
//           res:0
//         })
//         return
//       }
//       let val = calculate(calc.res, calc.num, calc.operation)
//       setCalc({
//         operation:"",
//         num:0,
//         res:val
//       })

//     } else if (value === "+" || value === "-" || value === "X" || value === "/" || value === "%"){
//       setCalc({
//         ...calc,
//         operation: value,
//         res: !calc.res && calc.num ? calc.num : calc.res,
//         num: 0,
//       });
//     }
//     console.log("input" + typeof(value) + value)
//   }
  
//   return (
//     <Wrapper>
//       <Screen value={calc.num ? calc.num : calc.res} />
//       <ButtonBox>
//         {
//           btnValues.flat().map((btn, i) => {
//             return (
//               <Button
//                 key={i}
//                 className={btn === "=" ? "equals" : ""}
//                 value={btn}
//                 onClick={clickHanlder}
//               />
//             );
//           })
//         }
//       </ButtonBox>
//     </Wrapper>
//   )
// }

import { useState} from "react";
import { Textfit } from "react-textfit";

function ToDoItem({description}){
  return(
    <li className="todoitem">
      <input type="checkbox"/>
      <p>{description}</p>
    </li>
  )
}

function ToDoList({children}){
  return(
    <ul>
      {children}
    </ul>
  )
}

function Button({text, onClick}){
  return(
    <button onClick={onClick}>{text}</button>
  )
}

function ItemInput({itemAddFunc}){
  const [newItem, setNewItem] = useState("")
  return(
    <div className="todoitem">
      <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)}/>
      <Button text="add" onClick={() => {
        if (newItem != ""){
          itemAddFunc(newItem)
          setNewItem("")
        } else {
          alert("must add an item")
        }
      }} />
    </div>
  )
}

function ItemList(){
  const [items, setItems] = useState([])

  function addNewItem(value){
    // console.log(value)
    const newItems = [...items, value]
    setItems(newItems)
    // console.log(newItems)
  }


  const listedItems = items.map((item) => {
    console.log(items)
    console.log(item)
    return <ToDoItem key={item} description={item}/>
  })

  // console.log(listedItems)
  return(
    <>
      <Textfit className="screen" mode="single">To Do list</Textfit>
      <ItemInput itemAddFunc={addNewItem}/>
      <ToDoList children={listedItems}/>
    </>
  )

}
export default function App(){
  return(
    <>
      <ItemList/>
    </>
  )
}