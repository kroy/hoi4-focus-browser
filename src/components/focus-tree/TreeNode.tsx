import React from 'react';
import FocusData from '../../types/FocusData';
import NodeData, { NodeDict } from '../../types/NodeData';
import Focus from './Focus';

type TreeNodeProps = {
  id: number;
  // app state basically; ideally we want just relevant slice
  selectedFocusIds: number[];
  nodes: NodeDict;
  // ---
};

function TreeNode(props: TreeNodeProps) {
  function isSelected(): boolean {
    return props.selectedFocusIds.includes(props.id)
  }

  function nodeData(): NodeData {
    return props.nodes[props.id]
  }

  function focusData(): FocusData {
    return nodeData().focus;
  }

  function buildChildNode(id: number) {
    return <TreeNode key={id} id={id} selectedFocusIds={props.selectedFocusIds} nodes={props.nodes} />
  }

  const childFocuses = nodeData().directChildIds.map((childId) => buildChildNode(childId));

  return (
    <div>
      <Focus selected={isSelected()} {...focusData()} />
      { childFocuses }
    </div>
  );
}

export default TreeNode;
