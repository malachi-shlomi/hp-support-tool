import { useDispatch } from 'react-redux';
import { Check, Properties } from '../../lib/interfaces';
import { MdDone, MdClose } from "react-icons/md";
import { setChecks, removeCheck, setSituation, removeSituation } from '../../store/reducers/caseSlice';
import { useState } from 'react';

interface ButonProps {
    option: Properties
    activeIndex: number | null
    setCheck: (result: Properties, index: number | null) => void
    index: number
}

const CheckButton: React.FC<ButonProps> = ({ option, index, activeIndex, setCheck }) => {
    const { title, type } = option;

    const checked = activeIndex === index;
    const turnedOff: boolean = activeIndex !== null && activeIndex !== index;

    const style = stylesForOptions.find(style => style.type === type);

    if (!style) return null;

    const { className, icon } = style;
    
    return (
        <div 
            className={
                `option rounded-pill
                ${className}
                ${checked && 'active'}
                ${turnedOff && 'off text-muted'}
                ` 
            }
            onClick={() => setCheck(option, index)}>
            {icon}
            {title}
        </div>
    )
}

interface Props {
    check: Check
}

const stylesForOptions: { type: string, className: string, icon: JSX.Element }[] = [
    { type: 'good',   className: 'works-button',  icon: <MdDone className='icon'/> },
    { type: 'bad',    className: 'bad-button',   icon: <MdClose className='icon'/> },
    { type: 'neutral',className: 'neutral-button text-muted',icon: <></> }
]

const CheckInput: React.FC<Props> = ({ check }) => {
    const active = check.options.findIndex(option => option.checked);
    
    const [activeIndex, setActiveIndex] = useState<number | null>(active === -1 ? null : active);
    const dispatch = useDispatch();
    const checkCode = check.code;

    const setCheck = (result: Properties, index: number | null) => {
        
        if (activeIndex === index) {
            setActiveIndex(null);
            dispatch(removeCheck(check.code));

            if (result.effects){
                dispatch(removeSituation(result.effects));
            }
            return
        }

        if (activeIndex !== null) {
            if (check.options[activeIndex].effects) {
                dispatch(removeSituation(check.options[activeIndex].effects))
            }
        }

        if (result.effects) {
            dispatch(setSituation(result.effects))
        }

        dispatch(setChecks({
            [checkCode]: result.code
        }));

        setActiveIndex(index);        
    }

    return (
        <div className='check-input item d-flex flex-column gap-2'>
            <div className='title text-bold'>{check.desc}</div>
            <div className='d-flex gap-2 align-items-center justify-content-center'>
                {check.options.map((option, i) => (
                    <CheckButton key={i} index={i} option={option} activeIndex={activeIndex} setCheck={setCheck} />
                ))}
            </div>
        </div>
    );
};

export default CheckInput;