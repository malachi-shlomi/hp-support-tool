import React from 'react';
import frequencies from '../../data/frequencies'
import { Frequency } from '../../lib/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { setFrequency } from '../../store/reducers/caseSlice';

const Frequencies: React.FC = () => {
    const dispatch = useDispatch();
    const { frequency: currentFrequency } = useSelector((state: any) => state.case.caseProps.issue);

    const handleClick = (frequency: Frequency) => {
        if (frequency.desc === currentFrequency?.desc) {
            dispatch(setFrequency(undefined))
            return;
        }
        dispatch(setFrequency(frequency))
    }

    return (
        <div className="">
            <div className='d-flex gap-2 frequencies-con'>
                {frequencies.map((frequency, index) => (
                    <div 
                        key={index} 
                        className={`frequency-item hover-color rounded-pill pointer ${frequency.desc === currentFrequency?.desc && 'active'}`}
                        onClick={() => handleClick(frequency)}>
                        {frequency.desc}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Frequencies;