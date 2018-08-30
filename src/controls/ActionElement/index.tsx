import * as React from 'react';

export interface ActionElementProps {
  label?: string;
  className?: string;
  handleOnClick: (val: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
}

function ActionElement(props: ActionElementProps): JSX.Element {
  const { label, className, handleOnClick, title } = props;

  return (
    <button
      className={className}
      title={title}
      onClick={(e) => handleOnClick(e)}
    >
      {label}
    </button>
  );
}

ActionElement['displayName'] = 'ActionElement';

export default ActionElement;
