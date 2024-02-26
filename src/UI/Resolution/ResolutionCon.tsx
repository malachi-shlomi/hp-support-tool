import React from 'react';
import CustomResolutionInput from './CustomResolutionInput';
import SmartResolutionCon from './SmartResolutionCon';
import { useDispatch } from 'react-redux';
import { submitCase } from '../../store/reducers/caseSlice';

const ResolutionCon: React.FC = () => {
    const dispatch = useDispatch();

    const handleSetResolution: (resolution: string) => void = (resolution) => {
        dispatch(submitCase({resolution}))
    }

    return (
        <div className='resolution-con rounded-3 d-flex flex-column'>
            <SmartResolutionCon submitCase={handleSetResolution}/>
            <CustomResolutionInput submitCase={handleSetResolution}/>
        </div>
    );
};

export default ResolutionCon;