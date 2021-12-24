import React, { useMemo } from 'react';
import Focus from './Focus';

type TreeProps = {
  name: string;
  selectedFocusIds: number[];
};

function Tree(props: TreeProps) {

  function isSelected(id: number): boolean {
    return props.selectedFocusIds.includes(id)
  }

  function buildFocus(id: number, name: string, selected: boolean) {
    return <Focus id={id} name={name} selected={selected} />;
  }

  const firstFocus = useMemo(() => buildFocus(1, "The Zinovyevite-Trotskyite Terrorist Center", isSelected(1)), [isSelected(1)]);
  const secondFocus = useMemo(() => buildFocus(2, "The Path of Marxism-Leninism Focus", isSelected(2)), [isSelected(2)]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{props.name} Selected Focuses: { props.selectedFocusIds.length }</h1>
      { firstFocus }
      { secondFocus }
    </div>

  );
}

export default Tree;
