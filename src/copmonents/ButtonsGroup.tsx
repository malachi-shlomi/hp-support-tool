import React from 'react';
import OptionsButton from './OptionButton';

interface Props {
  items: any[];
  title?: string;
  reducer: (state: any, action: any) => any;
  Component: React.FC<any>;
}

const ButtonsGroup: React.FC<Props> = ({ items, title, reducer, Component }) => {

  return (
    <div className='options'>
      {title && <h3>{title}</h3>}
      <div className='buttons-con'>
        {items.map((item: any, index: number) => (
          <Component key={index} item={item} action={reducer} />
        ))}
      </div>
    </div>
  );
};

export default ButtonsGroup;
