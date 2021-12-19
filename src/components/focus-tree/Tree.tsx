import React, { useState } from 'react';
import Focus from './Focus';

type TreeProps = {
  name: string;
};

function Tree(props: TreeProps) {
  const [selectedFocusIds, setSelectedFocuses] = useState<number[]>([]);

  function buildToggleCallback(toggledFocusId: number, currentlySelected: boolean) {
    return function(e: React.MouseEvent<HTMLElement>) {
      if (currentlySelected) {
        setSelectedFocuses(selectedFocusIds.filter(focusId => focusId != toggledFocusId));
      } else {
        setSelectedFocuses(selectedFocusIds.concat([toggledFocusId]));
      }
    };
  }

  function buildFocus(id: number, name: string) {
    let selected: boolean = selectedFocusIds.includes(id);
    return <Focus id={id} name={name} selected={selected} toggleCallback={ buildToggleCallback(id, selected) } />;
  }

  return (
    <div>
      <p>{props.name} Selected Focuses: { selectedFocusIds.length }</p>
      { buildFocus(1, "The Zinovyevite-Trotskyite Terrorist Center") }
      { buildFocus(2, "The Path of Marxism-Leninism Focus") }
    </div>

  );
}

export default Tree;
