import { useSelector } from 'react-redux';
import { setTS } from '../../store/reducers/caseSlice';
import { useDispatch } from 'react-redux';

const Troubleshooting = () => {
    const { ts } = useSelector((state: any) => state.case.note)
    const { nav } = useSelector((state: any) => state.case)
    const dispatch = useDispatch()

    const placeholder = nav === 'products' ? 'You can also, start typing here' : 'Troubleshooting'

    return (
        <div className='d-flex flex-column w-100 gap-1'>
            <div className='title'>Troubleshooting</div>
            <textarea className='w-100 border res-page-item px-3 py-2' 
                rows={12}
                placeholder= {placeholder}
                value={ts}
                onChange={(e) => dispatch(setTS(e.target.value))}
            />
        </div>
    );
};

export default Troubleshooting;