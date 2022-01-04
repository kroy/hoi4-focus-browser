import React from 'react';
import TreeDefinition from '@/datatypes/TreeDefinition';
import TreeNode from './TreeNode';

// this is supposed to represent the full focus tree
type TreeProps = {
  selectedFocusIds: number[];
  treeDefinition: TreeDefinition;
};

function Tree(props: TreeProps) {

  function buildRootNode(id: number) {
    return <TreeNode
      key={id}
      id={id}
      selectedFocusIds={props.selectedFocusIds}
      nodes={props.treeDefinition.nodes}
    />
  }

  const rootNodes = props.treeDefinition.rootNodeIds.map((id) => buildRootNode(id));

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Selected Focuses: { props.selectedFocusIds.length }</h1>
      { rootNodes }
    </div>

  );
}

export default Tree;
