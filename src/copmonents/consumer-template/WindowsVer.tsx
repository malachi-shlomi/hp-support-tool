import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setConsumerTemplate } from '../../store/reducers/caseSlice';

type versionsType = 'Windows 10' | 'Windows 11';
 
const WindowsVer: React.FC = () => {
    const versions: versionsType[] = ['Windows 10', 'Windows 11'];
    const { consTemplate } = useSelector((state: any) => state.case);
    const windowsVer = consTemplate?.windowsVer;
    const dispatch = useDispatch();

    const handleClick = (type: versionsType) => {        
        if (type === windowsVer) {
            dispatch(setConsumerTemplate({windowsVer: null}))
            return;
        };
        dispatch(setConsumerTemplate({windowsVer: type}))
    };

    return (
        <div className='d-flex flex-column w-100 gap-1'>
            <div className='click-selector res-page-item p-0'>
                {versions.map((version , idx) => (
                    <div className={`${windowsVer === version ? 'active' : ''} hover-color pointer click-selector-item border py-2 px-3`} 
                        onClick={() => handleClick(version)}
                        key={idx}>{version}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WindowsVer;