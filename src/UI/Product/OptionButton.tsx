import React from 'react';
import { Issue, Part } from '../../lib/interfaces';
import { useDispatch } from 'react-redux';

type Item = Issue | Part;

interface Props {
  item: Item;
  action: any;
}

const OptionsButton: React.FC<Props> = ({item, action}) => {
  const dispatch = useDispatch();

  const handleClick = (item: Item) => {
    dispatch(action(item));
  };

  return (
    <div className='option-button item' onClick={() => handleClick(item)}>
      {item.desc}
    </div>
  );
};

export default OptionsButton;
