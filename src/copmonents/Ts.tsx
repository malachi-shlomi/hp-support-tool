import React from 'react';
import useTs from '../hooks/useTs';
import ChecksCon from './ChecksCon';
import AddLink from './AddLink';

const Ts: React.FC = () => {
    const { checks, needAPicture } = useTs();

    return (
        <div className='d-flex flex-column gap-3'>
            {needAPicture && <AddLink />}
            {checks && <ChecksCon checks={checks} />}
        </div>
    );
};

export default Ts;