import { useDispatch } from 'react-redux';
import { newCase, setModalMessage } from '../../store/reducers/caseSlice';
import useSubmit from '../../hooks/useSubmit';

const SubmitButtons = () => {
    const dispatch = useDispatch();
    const { submit } = useSubmit();

    const handleSubmit = () => {
        submit()
        dispatch(setModalMessage("Copied to clipboard!"))
        dispatch(newCase());
    };

    return (
        <div className='submit-buttons-con w-100 d-flex justify-content-center'>
            <button 
                className='copy-button hover-color border d-flex align-items-center gap-2 text-muted hover-colorme'
                onClick={handleSubmit}>
                <span>Submit</span>
            </button>
        </div>
    );
};

export default SubmitButtons;