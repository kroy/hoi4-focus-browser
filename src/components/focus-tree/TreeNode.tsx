import FocusData from '@/datatypes/FocusData';
import NodeData, { NodeDict } from '@/datatypes/NodeData';
import React from 'react';
import Focus from './Focus';

type TreeNodeProps = {
  id: number;
  // app state basically; ideally we want just relevant slice
  selectedFocusIds: number[];
  minimizedFocusIds: number[];
  nodes: NodeDict;
  // ---
};

function TreeNode(props: TreeNodeProps) {
  const isSelected: boolean = props.selectedFocusIds.includes(props.id);
  const isMinimized: boolean = props.minimizedFocusIds.includes(props.id);
  const nodeData: NodeData = props.nodes[props.id];
  const focusData: FocusData = nodeData.focus;
  const mutualExclusionSelected: boolean = focusData.mutuallyExclusiveIds.reduce(
    (mutualExclusion: boolean, id: number) => mutualExclusion || props.selectedFocusIds.includes(id),
    false
  );

  function buildChildNode(id: number) {
    return <TreeNode key={id} id={id} selectedFocusIds={props.selectedFocusIds} minimizedFocusIds={props.minimizedFocusIds} nodes={props.nodes} />
  }

  const childFocuses = nodeData.directChildIds.map(childId => buildChildNode(childId));

  // TODO I don't like that the minimization logic is spread out between the focus and here. Doesn't bode well
  // Think about moving dispatch in here
  // TODO 2 display the minimize button below the node
  return (
    <li>
      <Focus minimized={isMinimized} selected={isSelected} selectable={!mutualExclusionSelected} {...focusData} />
      {childFocuses.length > 0 && 
        <ul>
          { isMinimized && <li className="tf-nc"> ... </li>}
          { !isMinimized && childFocuses }
        </ul>
      }
    </li>
  );
}

export default TreeNode;
