import { useDispatch } from 'react-redux';
import { setConsumerTemplate } from '../../store/reducers/caseSlice';
import { useSelector } from 'react-redux';

const ConsTempTs = () => {
    const dispatch = useDispatch();

    const { problemDescription, checks } = useSelector((state: any) => state.case.consTemplate);

    return (
        <div className='d-flex flex-column gap-4 customer-info'>
        <div className='problem-description d-flex align-items-center'>
            <input className='input border'
                placeholder='Problem'
                defaultValue={problemDescription}
                onChange={(e) => dispatch(setConsumerTemplate({problemDescription: e.target.value}))}
            />
        </div>
        <div className='what-was-checked d-flex align-items-center'>
            <textarea className='input border' 
                placeholder='What was checked' 
                defaultValue={checks}
                rows={3}
                onChange={(e) => dispatch(setConsumerTemplate({checks: e.target.value}))}
            />
        </div>
    </div>
    );
};

export default ConsTempTs;