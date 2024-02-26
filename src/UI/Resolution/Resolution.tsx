import React from 'react';
import { useSelector } from 'react-redux';
import { setResolution } from '../../store/reducers/caseSlice';
import { useDispatch } from 'react-redux';

const Resolution: React.FC = () => {
    const { resolution } = useSelector((state: any) => state.case.note)
    const dispatch = useDispatch()

    return (
        <div className='d-flex flex-column w-100 gap-1 res-page-resolution'>
            <div className='title'>Resolution</div>
            <textarea className='w-100 border res-page-item'  
                rows={2}
                placeholder='Resolution'
                value={resolution}
                onChange={(e) => dispatch(setResolution(e.target.value))}

            />
        </div>
    );
};

export default Resolution;