import React from 'react';
import useProducts from '../hooks/useProducts';
import useIssues from '../hooks/useIssues';
import ButtonsGroup from './ButtonsGroup';
import ProductButton from './ProductButton';
import OptionsButton from './OptionButton';
import { setIssue, setPart, setProduct } from '../store/reducers/caseSlice';

const Options: React.FC = () => {
  const { products } = useProducts(); 
  const { issues, parts } = useIssues();

  return (
    <div className="options-con">
      {products.length > 0 && <ButtonsGroup items={products} reducer={setProduct} Component={ProductButton}/>}
      {issues.length > 0 && <ButtonsGroup items={issues} reducer={setIssue} Component={OptionsButton}/>}
      {parts.length > 0 && <ButtonsGroup items={parts} reducer={setPart} Component={OptionsButton}/>}
    </div>
  );
};

export default Options;
