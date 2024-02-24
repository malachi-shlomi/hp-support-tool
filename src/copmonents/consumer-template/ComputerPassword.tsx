import React from 'react';
import { useDispatch } from 'react-redux';
import { setConsumerTemplate } from '../../store/reducers/caseSlice';

const ComputerPassword: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <div className='computer-password d-flex gap-3 align-items-center'>
                <input className='input border rounded'
                    placeholder='Computer Password'
                    onChange={(e) => dispatch(setConsumerTemplate({computerPassword: e.target.value}))}
                    />
            </div>
        </div>
    );
};

export default ComputerPassword;