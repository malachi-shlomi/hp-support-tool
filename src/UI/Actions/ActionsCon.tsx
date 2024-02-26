import React from 'react';
import { Action } from '../../lib/interfaces';
import ActionBox from './ActionBox';
import ActionsResult from './ActionsResult';
import useActions from '../../hooks/useActions';
import { useDispatch } from 'react-redux';
import { setAction, toggleAction } from '../../store/reducers/caseSlice';

interface ActionsConProps {
    actions: Action[];
}

const ActionsCon: React.FC<ActionsConProps> = ({  }) => {
    const { actions } = useActions();
    const answer = (
        actions.some(action => action.state == true) ? true :
        actions.some(action => action.state == false) ? false : null
    )
    
    const dispatch = useDispatch();

    const handleCheck = (action: Action, isChecked: boolean) => {
        dispatch(toggleAction({ actionDesc: action.code, isChecked, effects: action.effects }));
    };

    const askIfSolved: boolean = actions.filter(action => action.state !== undefined).length > 0

    const setEffects: (res: boolean | null) => void = (res) => {
        const doneActionsEffects = actions.filter(action => action.state !== undefined).map(action => action.code)
        dispatch(setAction({actions: doneActionsEffects, res}));
    }

    return (
        <div className='d-flex flex-column gap-3'>
            <div className='sub-titile'>Suggestions</div>
            <div className='d-grid gap-3 actions-con'>
                {actions.map((actions, index) => (
                    <ActionBox key={index} action={actions} handleCheck={handleCheck} />
                ))}
            </div>
            {askIfSolved && <ActionsResult setEffects={setEffects} answer={answer}/>}
        </div>
    );
};

export default ActionsCon;