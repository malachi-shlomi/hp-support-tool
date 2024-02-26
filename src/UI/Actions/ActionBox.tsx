import React from 'react';
import { Action } from '../../lib/interfaces';

interface Props {
    action: Action;
    handleCheck: (desc: Action, isChecked: boolean) => void;
}

const ActionBox: React.FC<Props> = ({ action, handleCheck }) => {
    const [isChecked, setIsChecked] = React.useState(action.state !== undefined);

    const handleClick = () => {
        handleCheck(action , !isChecked)
        setIsChecked(!isChecked);
    }
    
    return (
        <div 
            className={`${isChecked ? 'active' : 'disactive border'} action px-3 gap-1 py-2 rounded-1 d-flex align-items-center`}
            onClick={handleClick}
        >
            <div className="round me-1">
                <div className='circle'>
                </div>
            </div>
            <div>{action.desc}</div>
        </div>
    );
};

export default ActionBox;