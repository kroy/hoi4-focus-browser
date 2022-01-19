import { NodeDict } from '@/datatypes/NodeData';

type SelectionSummaryProps = {
    selectedFocusIds: number[];
    nodes: NodeDict;
}

export default function SelectionSummary(props: SelectionSummaryProps) {
    const totalDaysToComplete: number = props.selectedFocusIds.reduce((daysTotal, id) => {
        return daysTotal + props.nodes[id].focus.daysToComplete;
    }, 0)

    const selectionFlow: string = props.selectedFocusIds.reduce((flowStr, id) => {
        return flowStr + props.nodes[id].focus.id.toString() + "->";
    }, "") + "..."
    return (
        <div className="sticky top-0 text-3xl font-bold underline">Selected Focuses: { props.selectedFocusIds.length } | Days to complete: {totalDaysToComplete} | {selectionFlow}</div>
    );
}