import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
import Board from './components/board'
import { observe } from './components/game'

// Render the main component into the dom
observe(knightPositon => {
  ReactDOM.render((
    <Board knightPosition={knightPositon} />
  ), document.getElementById('app'))
})
