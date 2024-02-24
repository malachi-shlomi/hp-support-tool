import React from 'react';
import { Order, Resolution } from '../lib/interfaces';
import { useSelector } from 'react-redux';
import resolutions from '../data/resolutions';
import orders from '../data/orders';

interface Props {
    submitCase: (resolution: string) => void;
}

const SmartResolutionCon: React.FC<Props> = ({ submitCase }) => {
    const { caseProps } = useSelector((state: any) => state.case);

    const relevantResolutions: Resolution[] = resolutions.filter((resolution: Resolution) => {
        return resolution.dependancies(caseProps)
    });

    const relevantOrders: Order[] = (
        !caseProps.situation.CID && !caseProps.situation.ISSUE_SOLVED ?
        orders.filter((order: Order) => {
            return order.dependancies(caseProps)
        }) :
        []
    );

    return (
        <div className='d-flex gap-2 flex-wrap position-relative'>
            {[...relevantResolutions, ...relevantOrders].map((resolution, index) => (
                <div  
                    key={index} 
                    className='resolution-suggestion rounded-pill pointer hover-color px-3 py-2' 
                    onClick={() => submitCase(resolution.note || resolution.desc)}>
                    {resolution.desc}
                </div>
            ))}
        </div>
    );
};

export default SmartResolutionCon;