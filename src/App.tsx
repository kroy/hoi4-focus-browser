import React from 'react';
import logo from './logo.svg';
import './App.css';
import Focus from './components/focus-tree/Focus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        HoI4 Focus Tree Browser
      </header>
      <main>
        <Focus name="The Zinovyevite-Trotskyite Terrorist Center" />
      </main>
    </div>
  );
}

export default App;
