import React from 'react';

interface SettingsSwitchProps {
    title: string;
    state: boolean;
    toggleFunc: () => void;
}

const SettingsSwitch: React.FC<SettingsSwitchProps> = ({ title, state, toggleFunc }) => {
    console.log(state);
    
    return (
        <div className="d-flex justify-content-between text-muted align-items-center py-3 px-4 border rounded-4">
            <h5 className='m-0'>{title}</h5>
            <div className="form-check form-switch">
                <input
                    className="form-check-input switch"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    checked={state}
                    onChange={toggleFunc}
                />
            </div>
        </div>
    );
};

export default SettingsSwitch;
