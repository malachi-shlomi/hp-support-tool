import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setConsumerTemplate } from '../../store/reducers/caseSlice';

type serviceType = 'Onsite' | 'Offsite';
 
const ServiceType: React.FC = () => {
    const services: serviceType[] = ['Offsite', 'Onsite'];
    const { consTemplate } = useSelector((state: any) => state.case);
    const serviceType = consTemplate?.serviceType;
    const dispatch = useDispatch();


    const handleClick = (type: serviceType) => {        
        if (type === serviceType) {
            dispatch(setConsumerTemplate({serviceType: null}))
            return;
        };
        dispatch(setConsumerTemplate({serviceType: type}))
    };

    return (
        <div className='d-flex flex-column w-100 gap-1'>
            <div className='click-selector res-page-item p-0'>
                {services.map((type , idx) => (
                    <div className={`${serviceType === type ? 'active' : ''} hover-color pointer click-selector-item border py-2 px-3`} 
                        onClick={() => handleClick(type)}
                        key={idx}>{type}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceType;