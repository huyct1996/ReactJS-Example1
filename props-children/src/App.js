import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tick from './component/Tick';

function App() {
  return (
    <div className="App">
      {
        <Tick header="Huy">
          AAAAAAAA
        </Tick>
      }
    </div>
  );
}

export default App;
