import { useDispatch, useSelector } from 'react-redux';
import { setSettings } from '../store/reducers/caseSlice';

const useDarkMode = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: any) => state.case.settings);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    localStorage.setItem('isLight', String(darkMode));
    dispatch(setSettings({ darkMode: newMode })); 
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
