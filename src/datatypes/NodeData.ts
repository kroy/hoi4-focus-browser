import FocusData from './FocusData';

type NodeData = {
  focus: FocusData;
  directChildIds: number[];
}

// TODO: this seems pointless
export type NodeDict = {
  [key: number]: NodeData
}

export default NodeData;