import React from 'react';
import useTs from '../hooks/useTs';
import CheckInput from './CheckInput';
import { Check } from '../lib/interfaces';

interface ChecksConProps {
    checks: Check[];
}

const ChecksCon: React.FC<ChecksConProps> = ({ checks }) => {

    return (
        <div className='d-flex f-wrap gap-3'>
            {checks.map((check) => (
                <CheckInput key={check.id} check={check} />
            ))}
        </div>
    );
};

export default ChecksCon;