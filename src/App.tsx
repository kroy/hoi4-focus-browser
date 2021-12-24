import React, { useReducer, createContext, Dispatch } from 'react';
import './App.css';
import Tree from './components/focus-tree/Tree';

// TODO extract types
type AppState = {
  selectedFocusIds: number[];
  trees: Array<{
    name: string;
    children: Array<{
      id: number;
      name: string;
    }>;
  }>
}

type AppAction = {
  type: string;
  focusId: number;
}

const firstTestTree = { name: "The Path of Marxism-Leninism", children: [ { id: 1, name: "The Path of Marxism-Leninism"}, { id: 2, name: "The Left Opposition"}] }

const initialState = {
  selectedFocusIds: [],
  trees: [firstTestTree]
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'select':
      return { selectedFocusIds: [ ...state.selectedFocusIds, action.focusId ], trees: [firstTestTree] };
    case 'deselect':
      return { selectedFocusIds: state.selectedFocusIds.filter(focusId => focusId !== action.focusId), trees: [firstTestTree] };
    default:
      return state;
  }
}

export const AppDispatch = createContext<Dispatch<AppAction>>(() => null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppDispatch.Provider value={ dispatch }>
      <div className="App">
        <header className="App-header">
          HoI4 Focus Tree Browser
        </header>
        <main>
          <Tree selectedFocusIds={state.selectedFocusIds} {...state.trees[0]} />
        </main>
      </div>
    </AppDispatch.Provider>
  );
}
