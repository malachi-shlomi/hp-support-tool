import React from 'react';
import CheckInput from './CheckInput';
import { Check } from '../lib/interfaces';

interface ChecksConProps {
    checks: Check[];
}

const ChecksCon: React.FC<ChecksConProps> = ({ checks }) => {

    return (
        <div className='d-flex f-wrap gap-3'>
            {checks.map((check, index) => (
                <CheckInput key={index} check={check} />
            ))}
        </div>
    );
};

export default ChecksCon;