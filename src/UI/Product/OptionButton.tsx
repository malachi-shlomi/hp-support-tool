import React from 'react';
import { Issue, Part } from '../../lib/interfaces';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

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
    // <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>

    <div className='option-button item' onClick={() => handleClick(item)}>

      {item.desc}
    </div>
    // </motion.div>
  );
};

export default OptionsButton;
