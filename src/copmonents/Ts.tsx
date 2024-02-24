import React from 'react';
import useTs from '../hooks/useTs';
import ChecksCon from './ChecksCon';
import AddLink from './linkInput/AddLink';
import ActionsCon from './ActionsCon';
import useActions from '../hooks/useActions';
import Frequencies from './Frequencies';
import ResolutionCon from './ResolutionCon';
import NoSuggestionsFound from './NoSuggestionsFound';
import BatteryReport from './BatteryReport';
import BeepCode from './BeepCode';
import GetErrorMessage from './GetErrorMessage';

const Ts: React.FC = () => {
    const { checks, needAPicture, askForFrequency, needToGetBatteryReport, needToGetBeepCode, needToGetErrorMessage } = useTs();
    const { actions } = useActions();

    const showChecks: boolean = checks.length > 0;
    const showActions: boolean = actions.length > 0;
    const showAddLink: boolean = needAPicture;
    const showErrorMessageInput: boolean = needToGetErrorMessage;
    const noTS: boolean = !showChecks && !showAddLink && !showActions && !needToGetBatteryReport && !showErrorMessageInput;

    return (
        <div className='d-flex flex-column ts'>
            {askForFrequency && <Frequencies />}
            {needToGetBeepCode && <BeepCode />}
            {showErrorMessageInput && <GetErrorMessage />}
            {noTS && <NoSuggestionsFound />}
            {showChecks && <ChecksCon checks={checks} />}
            {showAddLink && <AddLink />}
            {showActions && <ActionsCon actions={actions} />}
            {needToGetBatteryReport && <BatteryReport />}
            <ResolutionCon />
        </div>
    );
};

export default Ts;