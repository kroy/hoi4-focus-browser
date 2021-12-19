import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from './components/focus-tree/Tree';

const AppDispatch = React.createContext(null);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        HoI4 Focus Tree Browser
      </header>
      <main>
        <Tree name="The Path of Marxism-Leninism" />
      </main>
    </div>
  );
}

export default App;
