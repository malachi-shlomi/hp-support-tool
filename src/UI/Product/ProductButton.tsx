import React from 'react';
import { Product } from '../../lib/interfaces';
import { useDispatch } from 'react-redux';


interface Props {
  item: Product;
  action: any;
}

const ProductButton: React.FC<Props> = ({item, action}) => {

  const dispatch = useDispatch();

  const handleClick = (item: Product) => {
    
    dispatch(action(item));
  };

  return (
    <div className='option-button btn item' onClick={() => handleClick(item)}>
      {item.productName}
    </div>
  );
};

export default ProductButton;
