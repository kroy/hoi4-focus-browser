import { NodeDict } from "@/datatypes/NodeData";

type SelectionChainProps = {
    selectedFocusIds: number[];
    nodes: NodeDict;
}

export default function SelectionChain(props: SelectionChainProps){
    const selectedFocusBlocks = props.selectedFocusIds.map((id: number) => {
        let focusName = props.nodes[id].focus.name;
        let firstTwoWords = focusName.split(' ').slice(0,2);
        return <div key={id} className="after:content-['->'] after:ml-2 border-2 hover:border-purple-300 border-transparent p-1">{firstTwoWords.reduce((abbr: string, word: string) => abbr + word.substring(0,1).toUpperCase(), "")}</div>
    });

    return (
        <div className="inline-flex flex-row">{selectedFocusBlocks}</div>
    );
}