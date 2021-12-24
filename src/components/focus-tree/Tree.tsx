import React from 'react';
import Focus from './Focus';

type TreeProps = {
  selectedFocusIds: number[];
  name: string;
  children: Array<{
    id: number;
    name: string;
  }>;
};

function Tree(props: TreeProps) {

  function isSelected(id: number): boolean {
    return props.selectedFocusIds.includes(id)
  }

  function buildFocus(child: { id: number; name: string }) {
    return <Focus key={child.id} id={child.id} name={child.name} selected={isSelected(child.id)} />;
  }

  const childFocuses = props.children.map((child) => buildFocus(child));

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{props.name} Selected Focuses: { props.selectedFocusIds.length }</h1>
      { childFocuses }
    </div>

  );
}

export default Tree;
