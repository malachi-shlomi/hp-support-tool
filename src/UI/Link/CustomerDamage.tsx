import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeSituation, setSituation } from '../../store/reducers/caseSlice';

const CustomerDamage = () => {
    const dispatch = useDispatch();
    const { CID } = useSelector((state: any) => state.case.caseProps.situation);

    const checked = CID === true;

    const handleClick = () => {
        if (checked) {
            dispatch(removeSituation({ CID: true, HARDWARE_ISSUE: true }));
        } else {
            dispatch(setSituation({ CID: true, HARDWARE_ISSUE: true }));
        }
    }

    return (
            <div className={`${checked ? 'active' : ''} hover-color rounded-pill py-1 px-3 pointer cid-button border`}
                onClick={handleClick}
            >
                It's Customer Damage
            </div>
    );
};

export default CustomerDamage;