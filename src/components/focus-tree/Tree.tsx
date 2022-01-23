import TreeDefinition from '@/datatypes/TreeDefinition';
import TreeNode from './TreeNode';
import SelectionSummary from './selection-summary/SelectionSummary';

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
      parentSelectable={true}
    />
  }

  const rootNodes = props.treeDefinition.rootNodeIds.map((id) => buildRootNode(id));

  return (
    <div>
      <SelectionSummary selectedFocusIds={props.selectedFocusIds} nodes={props.treeDefinition.nodes}/>
      <div className="tf-tree tf-custom">
        <ul>
          { rootNodes }
        </ul>
      </div>
    </div>

  );
}

export default Tree;
