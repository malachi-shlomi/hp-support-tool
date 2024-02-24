import React from 'react';
import { IoCreateOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { newCase, openConsumerTemplate, setNav } from '../../store/reducers/caseSlice';
import { LuSettings } from "react-icons/lu";
import Pages from './Pages';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import useDarkMode from '../../hooks/useDarkMode';

const SideMenu: React.FC = () => {
    const dispatch = useDispatch();
    const { darkMode, toggleDarkMode } = useDarkMode();

    const reset = () => {
        dispatch(newCase());
    }

    const goToSettings = () => {
        dispatch(setNav('settings'))
    }

    const openConsTemp = () => {
        dispatch(openConsumerTemplate())
    }


    return (
        <div className='d-flex flex-column menu-con h-100 gap-5'>
            <div className='menu-header d-flex align-items-center w-100 gap-3'>
                <div className='p-2 rounded-circle hover-color pointer text-muted'>
                    <LuSettings size={25} className='settings-icon' onClick={goToSettings}/>
                </div>
            </div>
            <div className='w-100'>
                <Pages />
            </div>
            <div className='menu-footer d-flex flex-column align-items-center w-100'>
                <div className='new-case-button text-muted d-flex align-items-center pointer rounded w-100'
                    onClick={openConsTemp}
                >
                    <HiWrenchScrewdriver size={21} className='home-icon'/>
                    <div className='home-text'>Consumer Template</div>
                </div>
                <div className='new-case-button text-muted d-flex align-items-center pointer rounded w-100'
                    onClick={reset}
                >
                    <IoCreateOutline size={23} className='home-icon'/>
                    <div className='home-text'>New Case</div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;