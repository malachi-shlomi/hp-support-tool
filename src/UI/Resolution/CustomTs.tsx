import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setNav, setPD, setTS } from '../../store/reducers/caseSlice';
import autoSubject from '../../writter/autoSubject';

const CustomTs = () => {
    const { navigation } = useSelector((state: any) => state.case);
    const { ts } = useSelector((state: any) => state.case.note);
    const dispatch = useDispatch();
    const [firstEnter, setFirstEnter] = useState(true);

    const placeholder =
        navigation === 'products' ? 'You can also start typing here' : 'Troubleshooting';

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            if (firstEnter) {
                const autoPD = autoSubject({ troubleshooting: ts, resolution: '' });
                dispatch(setPD(autoPD));
                setFirstEnter(false);
            }
        }
    };

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        dispatch(setTS(newValue));

        // Check if the entered value is empty and reset state
        if (newValue.trim() === '' && !firstEnter) {
            dispatch(setPD('')); // Assuming setPD('') is how you reset the state for 'PD'
            setFirstEnter(true);
        }
    };

    return (
        <div className={`d-flex flex-column res-con`}>
            <textarea
                className={`border res-page-item res-text-area ${navigation === 'res' && 'text-area-on'}`}
                placeholder={placeholder}
                onFocus={() => dispatch(setNav('res'))}
                value={ts}
                onKeyDown={handleKeyDown}
                onChange={handleTextareaChange}
                rows={1}
            />
        </div>
    );
};

export default CustomTs;
