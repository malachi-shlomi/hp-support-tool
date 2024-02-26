import React from 'react';
import SettingsSwitch from './SettingsSwitch';
import useDarkMode from '../../hooks/useDarkMode';

const SettingsPage: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    const settings = [
        {
            title: "Dark Mode",
            state: darkMode,
            toggleState: () => {
                toggleDarkMode();
            }
        }
    ]

    return (
        <div className='d-flex flex-column settings-page'>
            <div className='page-title text-muted'>Settings</div>
            {settings.map((setting, index) => (
                <SettingsSwitch key={index} title={setting.title} toggleFunc={setting.toggleState} state={setting.state} />
            ))}
        </div>
    );
};

export default SettingsPage;