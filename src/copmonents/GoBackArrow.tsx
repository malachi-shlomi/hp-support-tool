import { useDispatch } from 'react-redux';
import { goBack } from '../store/reducers/caseSlice';
import { IoIosArrowBack } from 'react-icons/io';

const GoBackArrow = () => {
    const dispatch = useDispatch();

    return (
        <div className="back-btn pointer rounded-circle position-absolute" onClick={() => dispatch(goBack())}>
            <IoIosArrowBack size={30}/>
        </div>
    );
};

export default GoBackArrow;