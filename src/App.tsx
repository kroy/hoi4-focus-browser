import { createContext, Dispatch } from 'react';
import { AppAction } from './app/reducer';
import './App.css';
import Tree from './components/focus-tree/Tree';
import { useAppReducer } from './app/hooks';

export const AppDispatch = createContext<Dispatch<AppAction>>(() => null);

export default function App() {
  const [appState, appDispatch] = useAppReducer();
  return (
    <AppDispatch.Provider value={ appDispatch }>
      <div className="App">
        <header className="App-header">
          HoI4 Focus Tree Browser
        </header>
        <main>
          <Tree {...appState} />
        </main>
      </div>
    </AppDispatch.Provider>
  );
}
