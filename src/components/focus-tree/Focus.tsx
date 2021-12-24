import React, { useContext } from 'react';
import { AppContext } from '../../App';

type FocusProps = {
  id: number;
  name: string;
  selected: boolean;
};

function Focus(props: FocusProps) {
  const { state, dispatch } = useContext(AppContext);
  console.log("rendering", props.name);

  function handleClick() {
    dispatch({ type: props.selected ? "deselect" : "select", focusId: props.id });
  }

  return (
    <div>
      <button onClick={ handleClick }>National Focus: {props.name} selected? { props.selected ? "yes" : "no" }</button>
    </div>

  );
}

export default Focus;
