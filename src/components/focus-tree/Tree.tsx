import TreeDefinition from '@/datatypes/TreeDefinition';
import TreeNode from './TreeNode';
import SelectionSummary from './selection-summary/SelectionSummary';

// this is supposed to represent the full focus tree
// @TODO can we re-use the appstate type here?
type TreeProps = {
  selectedFocusIds: number[];
  minimizedFocusIds: number[];
  treeDefinition: TreeDefinition;
};

function Tree(props: TreeProps) {

  function buildRootNode(id: number) {
    return <TreeNode
      key={id}
      id={id}
      selectedFocusIds={props.selectedFocusIds}
      minimizedFocusIds={props.minimizedFocusIds}
      nodes={props.treeDefinition.nodes}
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
