import React from 'react';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../../store/reducers/caseSlice';

const GetErrorMessage: React.FC = () => {
    const dispatch = useDispatch();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(setErrorMessage(e.target.value));
    };


    return (
        <div className="get-error-message">
            <input 
                type="text"
                placeholder="Error Message"
                className="input border py-2 px-3 rounded w-100"
                onChange={handleChange}
            />
        </div>
    );
};

export default GetErrorMessage;