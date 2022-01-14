import { useContext, memo } from 'react';
import { AppDispatch } from '../../App';
import clsx from 'clsx';

type FocusProps = {
  id: number;
  name: string;
  selected: boolean;
  selectable: boolean;
  minimized: boolean;
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

  function minimize() {
    dispatch({
      type: props.minimized ? "maximize" : "minimize",
      focusId: props.id,
    });
  }

  return (
    <div className={clsx('tf-nc', props.selected && 'selected', !props.selectable && 'unselectable')}>
      <button onClick={minimize}>
        { props.minimized ? "Maximize" : "Minimize" }
      </button>
      <button className="p-2" onClick={ handleClick }>
        National Focus: {props.name} selected? { props.selected ? "yes" : "no" }
      </button>
    </div>
  );
}

export default memo(Focus);
