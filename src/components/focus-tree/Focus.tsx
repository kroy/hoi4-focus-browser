import React, { useContext, memo } from 'react';
import { AppDispatch } from '../../App';

type FocusProps = {
  id: number;
  name: string;
  selected: boolean;
  selectable: boolean;
};

function Focus(props: FocusProps) {
  const dispatch = useContext(AppDispatch);

  function handleClick() {
    if (props.selectable) {
      dispatch({ type: props.selected ? "deselect" : "select", focusId: props.id })
    } else {
      dispatch({ type: "deselect", focusId: props.id })
    }
  }

  return (
    <button className={"p-2 border-solid border-2" + (props.selectable ? "" : " border-red-400")} onClick={ handleClick }>
      National Focus: {props.name} selected? { props.selected ? "yes" : "no" }
    </button>
  );
}

export default memo(Focus);
