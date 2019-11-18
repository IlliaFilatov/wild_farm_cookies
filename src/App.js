import React from 'react';
import './App.scss';
import Field from './components/field';
import Market from './components/market';
import Stock from './components/stock';
import Invent from './components/invent';
import Decorations from './components/decorations';

function App() {
  return (
    <div className="App">
      <Decorations></Decorations>
      <Market></Market>
      <Field></Field>
      <Stock></Stock>
      <Invent></Invent>
    </div>
  );
}

export default App;
