import React, { useReducer, createContext, Dispatch } from 'react';
import './App.css';
import Tree from './components/focus-tree/Tree';

type AppState = {
  selectedFocusIds: number[];
}

type AppAction = {
  type: string;
  focusId: number;
}

const initialState = { selectedFocusIds: [] };

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'select':
      return { selectedFocusIds: [ ...state.selectedFocusIds, action.focusId ] };
    case 'deselect':
      return { selectedFocusIds: state.selectedFocusIds.filter(focusId => focusId !== action.focusId) };
    default:
      return state;
  }
}

export const AppContext = createContext<Dispatch<AppAction>>(() => null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={ dispatch }>
      <div className="App">
        <header className="App-header">
          HoI4 Focus Tree Browser
        </header>
        <main>
          <Tree selectedFocusIds={state.selectedFocusIds} name="The Path of Marxism-Leninism" />
        </main>
      </div>
    </AppContext.Provider>
  );
}
