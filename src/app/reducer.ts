import testTreeDef from "../test-data/TestTreeData"; // Figure out why ts can't find the module if I use @/test-data/TestTreeData
import TreeDefinition from "@/datatypes/TreeDefinition";

export type AppState = {
  selectedFocusIds: number[];
  minimizedFocusIds: number[];
  treeDefinition: TreeDefinition;
}

export type AppAction = {
  type: string;
  focusId: number;
}

export const initialState: AppState = {
  selectedFocusIds: [],
  minimizedFocusIds: [],
  treeDefinition: testTreeDef
};

export default function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'select':
      return { selectedFocusIds: [ ...state.selectedFocusIds, action.focusId ], minimizedFocusIds: state.minimizedFocusIds, treeDefinition: testTreeDef };
    case 'deselect':
      return { selectedFocusIds: state.selectedFocusIds.filter(focusId => focusId !== action.focusId), minimizedFocusIds: state.minimizedFocusIds, treeDefinition: testTreeDef };
      case 'minimize':
        return { selectedFocusIds: state.selectedFocusIds, minimizedFocusIds: [ ...state.minimizedFocusIds, action.focusId ], treeDefinition: state.treeDefinition };
      case 'maximize':
        return { selectedFocusIds: state.selectedFocusIds, minimizedFocusIds: state.minimizedFocusIds.filter(focusId => focusId !== action.focusId), treeDefinition: state.treeDefinition };
    default:
      return state;
  }
}
