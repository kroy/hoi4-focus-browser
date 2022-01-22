import testTreeDef from "../test-data/TestTreeData"; // Figure out why ts can't find the module if I use @/test-data/TestTreeData
import TreeDefinition from "@/datatypes/TreeDefinition";

export type AppState = {
  selectedFocusIds: number[];
  treeDefinition: TreeDefinition;
}

export type AppAction = {
  type: string;
  focusId: number;
}

export const initialState: AppState = {
  selectedFocusIds: [],
  treeDefinition: testTreeDef
};

export default function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'select':
      return { selectedFocusIds: [ ...state.selectedFocusIds, action.focusId ], treeDefinition: testTreeDef };
    case 'deselect':
      return { selectedFocusIds: state.selectedFocusIds.filter(focusId => focusId !== action.focusId), treeDefinition: testTreeDef };
    default:
      return state;
  }
}
