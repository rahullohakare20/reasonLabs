import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { row, col, NO_OF_RED_BOX } from './config/config.constant';

ReactDOM.render(
  <React.StrictMode>
    <App
      row={row}
      col={col}
      NO_OF_RED_BOX={NO_OF_RED_BOX}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
