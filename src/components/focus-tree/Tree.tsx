import React from 'react';
import Focus from './Focus';

type TreeProps = {
  name: string;
  selectedFocusIds: number[];
};

function Tree(props: TreeProps) {

  function isSelected(id: number): boolean {
    return props.selectedFocusIds.includes(id)
  }

  function buildFocus(id: number, name: string) {
    return <Focus id={id} name={name} selected={isSelected(id)} />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{props.name} Selected Focuses: { props.selectedFocusIds.length }</h1>
      { buildFocus(1, "The Zinovyevite-Trotskyite Terrorist Center") }
      { buildFocus(2, "The Path of Marxism-Leninism Focus") }
    </div>

  );
}

export default Tree;
