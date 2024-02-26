import React from 'react';
import { useDispatch } from 'react-redux';
import { setConsumerTemplate } from '../../store/reducers/caseSlice';

const CustomerInfo = () => {
    const dispatch = useDispatch();

    return (
        <div className='d-flex flex-column gap-4 customer-info'>
            <div className='customer-name d-flex align-items-center'>
                <input className='input border'
                    placeholder='Full Name'
                    onChange={(e) => dispatch(setConsumerTemplate({name: e.target.value}))}
                />
            </div>
            <div className='customer-phone d-flex align-items-center'>
                <input className='input border' 
                    placeholder='Phone Number'
                    onChange={(e) => dispatch(setConsumerTemplate({phoneNumber1: e.target.value}))}
                />
                <input className='input border' 
                    placeholder='Another Phone Number'
                    onChange={(e) => dispatch(setConsumerTemplate({phoneNumber2: e.target.value}))}
                />
            </div>
            <div className='customer-address d-flex align-items-center'>
                <textarea className='input border' 
                    placeholder='Address' 
                    rows={3}
                    onChange={(e) => dispatch(setConsumerTemplate({address: e.target.value}))}
                    />
            </div>
            <div className='computer-password d-flex align-items-center'>
            <input className='input border' 
                placeholder='Computer Password'
                onChange={(e) => dispatch(setConsumerTemplate({computerPassword: e.target.value}))}
            />
            </div>
        </div>
    );
};

export default CustomerInfo;