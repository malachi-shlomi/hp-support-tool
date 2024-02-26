import React from 'react';

interface Props {
  items: any[];
  title?: string;
  reducer: (state: any, action: any) => any;
  Component: React.FC<any>;
}

const ButtonsGroup: React.FC<Props> = ({ items, title, reducer, Component }) => {

  return (
    <div className='d-flex flex-column gap-3'>
      {title && <div className='buttons-title text-muted m-0 p-0'>{title}</div>}
      <div className='d-flex flex-wrap gap-3'>
        {items.map((item: any, index: number) => (
          <Component key={index} item={item} action={reducer} />
        ))}
      </div>
    </div>
  );
};

export default ButtonsGroup;
