import React from 'react';

interface Props {
    setEffects: (res: boolean | null) => void;
    answer: boolean | null;
}

const ActionsResult: React.FC<Props> = ({setEffects, answer}) => {

    const handleSetActionsResults: (res: boolean) => void = (res) => {
        if (res === answer) {
            setEffects(null);
            return;
        }
        setEffects(res);
    }

    return (
        <div className='d-flex gap-2'>
            <div 
                className={`px-3 py-1 pointer solved-button rounded-pill ${answer === true && 'active'}`} 
                onClick={() => handleSetActionsResults(true)}>
                Solved
            </div>
            <div 
                className={`px-3 py-1 pointer hover-color not-solved-button border rounded-pill ${answer === false && 'active'}`}
                onClick={() => handleSetActionsResults(false)}>
                Not Solved
            </div>
        </div>
    );
};

export default ActionsResult;