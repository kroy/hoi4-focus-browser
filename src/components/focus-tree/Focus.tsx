import React from 'react';

type FocusProps = {
  id: number;
  name: string;
  selected: boolean;
  toggleCallback(e: React.MouseEvent<HTMLElement>): void;
};

function Focus(props: FocusProps) {
  return (
    <div>
      <p onClick={ props.toggleCallback }>National Focus: {props.name}</p>
      <p> selected? { props.selected ? "yes" : "no" } </p>
    </div>

  );
}

export default Focus;
