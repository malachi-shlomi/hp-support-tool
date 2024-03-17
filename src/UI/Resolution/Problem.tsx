import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setPD } from '../../store/reducers/caseSlice';

const Problem = () => {
    const { problemDesc } = useSelector((state: any) => state.case.note)
    const dispatch = useDispatch();

    return (
        <div className='d-flex flex-column w-100 gap-1'>
            {/* <div className='title'>Problem Description</div> */}
            <input className='border res-page-item'
                type='text'
                placeholder='Problem description'
                value={problemDesc}
                onChange={(e) => dispatch(setPD(e.target.value))}
            />
        </div>
    );
};

export default Problem;