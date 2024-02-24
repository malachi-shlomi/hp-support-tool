import React from 'react';
import WindowsVer from './WindowsVer';
import ServiceType from './ServiceType';
import CustomerInfo from './CustomerInfo';
import { useDispatch } from 'react-redux';
import { goBack, setModalMessage, submitCase, submitConsumerTemplate } from '../../store/reducers/caseSlice';
import ConsTempTs from './ConsTempTs';
import { useSelector } from 'react-redux';
import writeTemplate from '../../writter/writeTemplate';
import clipboardCopy from 'clipboard-copy';

const ConsumerTemplate: React.FC = () => {
    const dispatch = useDispatch();
    const { caseProps, consTemplate } = useSelector((state: any) => state.case);

    const { issue } = caseProps;

    const handleSubmit = () => {
        const templateNote = writeTemplate(consTemplate);
        
        if (issue.desc) {
            dispatch(submitCase({resolution: templateNote}))
        } else {      
            clipboardCopy(templateNote)
            dispatch(setModalMessage('Copied to clipboard!'))
            dispatch(goBack())
        }
    }

    return (
        <div className='d-flex flex-column gap-4 consumer-template-page'>
            <div className='page-title'>Consumer Template</div>
            <div className='d-flex flex-column gap-4'>
                <ServiceType />
                <ConsTempTs />
                <CustomerInfo />
                <WindowsVer />
            </div>
            <div className=''>
                <button className='submit-template-btn bg-primary py-2 px-5 mt-3 rounded'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ConsumerTemplate;