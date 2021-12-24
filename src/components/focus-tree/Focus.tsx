import React, { useContext } from 'react';
import { AppContext } from '../../App';

type FocusProps = {
  id: number;
  name: string;
  selected: boolean;
};

function Focus(props: FocusProps) {
  const dispatch = useContext(AppContext);
  console.log("rendering", props.name);

  function handleClick() {
    dispatch({ type: props.selected ? "deselect" : "select", focusId: props.id });
  }

  return (
    <button className="p-2 border-solid border-2" onClick={ handleClick }>
      National Focus: {props.name} selected? { props.selected ? "yes" : "no" }
    </button>
  );
}

export default Focus;
