import React from 'react';
import FocusData from '@/datatypes/FocusData';
import NodeData, { NodeDict } from '@/datatypes/NodeData';
import Focus from './Focus';

type TreeNodeProps = {
  id: number;
  // app state basically; ideally we want just relevant slice
  selectedFocusIds: number[];
  nodes: NodeDict;
  // ---
};

function TreeNode(props: TreeNodeProps) {
  const isSelected: boolean = props.selectedFocusIds.includes(props.id);
  const nodeData: NodeData = props.nodes[props.id];
  const focusData: FocusData = nodeData.focus;
  const mutualExclusionSelected: boolean = focusData.mutuallyExclusiveIds.reduce(
    (mutualExclusion: boolean, id: number) => mutualExclusion || props.selectedFocusIds.includes(id),
    false
  );

  function buildChildNode(id: number) {
    return <TreeNode key={id} id={id} selectedFocusIds={props.selectedFocusIds} nodes={props.nodes} />
  }

  const childFocuses = nodeData.directChildIds.map(childId => buildChildNode(childId));

  return (
    <li>
      <Focus selected={isSelected} selectable={!mutualExclusionSelected} {...focusData} />
      {childFocuses.length > 0 && 
        <ul>
          { childFocuses }
        </ul>
      }
    </li>
  );
}

export default TreeNode;
