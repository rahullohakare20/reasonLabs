import React, { useState } from 'react';
import classNames from 'classnames/bind';
import './task_1.css';

function Task_1({ row = 4, col = 4, NO_OF_RED_BOX = 2 }) {
  const initArray = new Array(row * col).fill(0);

  const [selectedIndices, setSelectedIndices] = useState([]);
  const [prevSelectedIndices, setPrevSelectedIndices] = useState([]);
  const [count, setCount] = useState(0);
  const [lookUp, setLookUp] = useState({});

  const isBoxEligible = (key) => {
    return selectedIndices.includes(key) || prevSelectedIndices.includes(key);
  }

  // Lookup/hash for count and indexes 
  const setBoxClicked = (key) => {
    const newLookUp = { ...lookUp };
    newLookUp[key] = count + 1;

    setLookUp(newLookUp);
    setCount(count + 1);
  }

  const onBoxClick = (key) => {
    const selectedElements = [...selectedIndices];

    //selected element more than expected count
    if (selectedElements.length >= NO_OF_RED_BOX) {
      const removedBox = selectedElements.shift();

      setPrevSelectedIndices([...prevSelectedIndices, removedBox]);
    }

    setSelectedIndices([...selectedElements, key]);
    setBoxClicked(key);
  }

  const generateGrid = () => {
    return initArray.map((value, key) => {
      let countBox = count;
      return <div
        className={classNames('game-cell', {
          selected: selectedIndices.includes(key),
          prevSelected: prevSelectedIndices.includes(key)
        })}
        onClick={() => onBoxClick(key)}
        id={key}
      >
        {isBoxEligible(key) && `Box ${lookUp[key]}`}
      </div>
    });
  }

  return (
    <div>
      <h1>Simple {row} x {col} Grid Game</h1>
      <div className='container'>
        <div className="game-container">
          <div className="game">
            {generateGrid()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task_1;
