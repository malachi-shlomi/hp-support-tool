import React from 'react';
import useProducts from '../../hooks/useProducts';
import useIssues from '../../hooks/useIssues';
import ButtonsGroup from './ButtonsGroup';
import ProductButton from './ProductButton';
import OptionsButton from './OptionButton';
import { setIssue, setPart, setProduct, setSubPart } from '../../store/reducers/caseSlice';
import { useSelector } from 'react-redux';

const Options: React.FC = () => {
  const { products } = useProducts(); 
  const { issues, parts, subParts } = useIssues();
  const { desc } = useSelector((state: any) => state.case.caseProps.part);

  return (
    <div className="d-flex flex-column options-con">
        {products.length > 0 && <ButtonsGroup title="Products" items={products} reducer={setProduct} Component={ProductButton}/>}
        {issues && <ButtonsGroup title='Common Issues' items={issues} reducer={setIssue} Component={OptionsButton}/>}
        {parts && <ButtonsGroup title='Parts' items={parts} reducer={setPart} Component={OptionsButton}/>}
        {subParts && <ButtonsGroup title={desc} items={subParts} reducer={setSubPart} Component={OptionsButton}/>}
    </div>
  );
};

export default Options;
