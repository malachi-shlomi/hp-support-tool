import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setNav, setTS } from '../store/reducers/caseSlice';


const CustomTs = () => {
  const { navigation } = useSelector((state: any) => state.case);
  const { ts } = useSelector((state: any) => state.case.note)
  const dispatch = useDispatch();

  const placeholder = navigation === 'products' ? 'You can also start typing here' : 'Troubleshooting'

  return (
    <div className={`d-flex flex-column res-con`}>
      <textarea
        className={`border res-page-item res-text-area ${navigation === 'res' && 'text-area-on'}`}
        placeholder={placeholder}
        onFocus={() => dispatch(setNav('res'))}
        value={ts}
        onChange={(e) => dispatch(setTS(e.target.value))}
        rows={1}
      />
    </div>
  );
};

export default CustomTs;