import React from 'react';
import { Issue, Product, Part } from '../lib/interfaces';
import { useDispatch } from 'react-redux';
import { setIssue } from '../store/reducers/caseSlice';

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
    <div className='option-button btn item' onClick={() => handleClick(item)}>
      {item.desc}
    </div>
  );
};

export default OptionsButton;
