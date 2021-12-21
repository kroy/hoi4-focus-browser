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
      <button onClick={ props.toggleCallback }>National Focus: {props.name} selected? { props.selected ? "yes" : "no" }</button>
    </div>

  );
}

export default Focus;
