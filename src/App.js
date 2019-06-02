import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const colours = ['black', 'white', 'yellow', 'red', 'blue'];

const Square = styled.div`
  display: block;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  ${ p => p.borders ? 'border: 8px solid black;' : null }
  background: ${p => p.color};
`;

const Frame = styled.div`
  display: flex;
  width: 600px;
  height: auto;
  margin: 0 auto;
  flex-wrap: wrap;
  background: white;
`;

const App = (i) => {
  const [quantity, setQuantity] = useState(0);
  const [border, setBorder] = useState(false);

  const renderBox = () => {
    let randomColor = Math.floor(Math.random() * 5);
    let randomHeight = Math.floor(Math.random() * 200);
    let randomWidth = Math.floor(Math.random() * 400);

    if (randomHeight < 50 || randomWidth < 10) {
      return null
    }

    return <Square
        index={i}
        color={colours[randomColor]}
        height={randomHeight}
        width={randomWidth}
        borders={border}
      >
      </Square>
  }

  const removeBorder = () => {
    setBorder(border === false ? true : false)
  }

  return (
    <div>
      <div>
        <header>
          <p>You clicked {quantity} times</p>
          <button onClick={() => setQuantity(quantity + 1)}>Modri it!</button>
          <p>border {border && 'borders'}</p>
          <button onClick={removeBorder}>Remove borders</button>
        </header>
        <Frame>
          {[...Array(6)].map((e, i) => renderBox(i))}
        </Frame>
      </div>
    </div>
  );
}

export default App;

