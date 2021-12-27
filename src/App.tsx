import React, { useReducer, createContext, Dispatch } from 'react';
import './App.css';
import Tree from './components/focus-tree/Tree';
import { NodeDict } from './types/NodeData';
import TreeDefinition from './types/TreeDefinition';

// TODO extract types
type AppState = {
  selectedFocusIds: number[];
  treeDefinition: TreeDefinition;
}

type AppAction = {
  type: string;
  focusId: number;
}

const testData: NodeDict = {
  0: {
    focus: {
      id: 0,
      name: "The Path of Marxism-Leninism"
    },
    preReqIds: [],
    directChildIds: [1, 2]
  },
  1: {
    focus: {
      id: 1,
      name: "Stalinism"
    },
    preReqIds: [0],
    directChildIds: []
  },
  2: {
    focus:{
      id: 2,
      name: "The Left Opposition"
    },
    preReqIds: [0],
    directChildIds: []
  }
}

const testTreeDef: TreeDefinition = {
  rootNodeIds: [0],
  nodes: testData
}

const initialState: AppState = {
  selectedFocusIds: [],
  treeDefinition: testTreeDef
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'select':
      return { selectedFocusIds: [ ...state.selectedFocusIds, action.focusId ], treeDefinition: testTreeDef };
    case 'deselect':
      return { selectedFocusIds: state.selectedFocusIds.filter(focusId => focusId !== action.focusId), treeDefinition: testTreeDef };
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
          <Tree {...state} />
        </main>
      </div>
    </AppDispatch.Provider>
  );
}
