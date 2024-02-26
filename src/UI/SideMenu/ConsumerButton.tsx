import React from 'react';
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { setNav } from '../../store/reducers/caseSlice';

const ConsumerButton: React.FC = () => {
    const dispatch = useDispatch();
    
    const openConsumerTemplate = () => {
        dispatch(setNav('consumerTemplate'))
    }

    return (
        <div className="consumer-button rounded-circle text-white pointer border d-flex justify-content-center align-items-center hover-color"
            onClick={openConsumerTemplate}
        >
            <HiWrenchScrewdriver size={24}/>
        </div>
    );
};

export default ConsumerButton;