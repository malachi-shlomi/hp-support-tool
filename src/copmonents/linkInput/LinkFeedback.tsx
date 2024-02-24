import React, { useState } from 'react';
import LinkFeedbackItem from './LinkFeedbackItem';
import { Properties } from '../../lib/interfaces';
import { useDispatch } from 'react-redux';
import { removeSituation, setLinkResultCode, setSituation } from '../../store/reducers/caseSlice';
import { useSelector } from 'react-redux';

interface Props {
    thereIsLink: boolean;
    options: {
        title: string;
        effects?: Properties;
        code: string;
    }[]
}

const LinkFeedback: React.FC<Props> = ({thereIsLink, options}) => {
    const { linkResultCode } = useSelector((state: any) => state.case.caseProps);
    const active = options.findIndex((option) => option.code === linkResultCode);

    const [inx, setInx] = useState<number | null>(active === -1 ? null : active);
    const dis = useDispatch();

    if (!thereIsLink && inx !== null) {
        dis(removeSituation(options[inx].effects))
        setInx(null);
    }

    if (!thereIsLink) return null;

    const handleClick = (index: number, effects: Properties | undefined, code: string) => {
        if (inx === index) {
            if (effects) dis(removeSituation(effects))
            dis(setLinkResultCode(null))
            setInx(null);
        } else {
            if (inx !== null) {
                if (options[inx].effects) dis(removeSituation(options[inx].effects))
            }
            dis(setLinkResultCode(code))
            dis(setSituation(effects))
            setInx(index);
        }
    };

    return (
        <div className='d-flex gap-2'>
            {options.map((option, index) => (
                <LinkFeedbackItem key={index} 
                    title={option.title} 
                    checked={inx === index} 
                    handleClick={() => handleClick(index, option.effects, option.code)}
                />
            ))}
        </div>
    );
};

export default LinkFeedback;