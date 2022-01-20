import { NodeDict } from '@/datatypes/NodeData';
import SelectionChain from './SelectionChain';

type SelectionSummaryProps = {
    selectedFocusIds: number[];
    nodes: NodeDict;
}

export default function SelectionSummary(props: SelectionSummaryProps) {
    const totalDaysToComplete: number = props.selectedFocusIds.reduce((daysTotal, id) => {
        return daysTotal + props.nodes[id].focus.daysToComplete;
    }, 0)

    return (
        <div className="sticky top-0 text-3xl font-bold underline">Selected Focuses: { props.selectedFocusIds.length } | Days to complete: {totalDaysToComplete} | <SelectionChain {...props} /></div>
    );
}